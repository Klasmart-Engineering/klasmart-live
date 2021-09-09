import { debugResponse } from '../responses/debug';
import { statusText } from '../responses/statusText';
import { parse as parseCookies } from 'cookie';
import { createRemoteJWKSet } from 'jose-browser-runtime/jwks/remote';
import { jwtVerify } from 'jose-browser-runtime/jwt/verify';
import { Device } from './device';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import {
  roomReducer,
  Actions,
  Context,
  INITIAL_ROOM_STATE,
  generateStateDiff,
} from 'kidsloop-live-state';
import pb from 'kidsloop-live-serialization';

type UserDevices = Map<number, Device>;

// move to auth.ts
// can we move all the auth stuff there too?
export interface Token {
  aud: string[];
  email: string;
  exp: number;
  iat: number;
  nbf: number;
  iss: string;
  type: string;
  identity_nonce: string;
  sub: string;
  country: string;
}

const DEBOUNCE_TIME = 300;

export class Room implements DurableObject {
  public store: EnhancedStore;

  private clients = new Map<string, UserDevices>();
  private teachers = new Set<string>();

  private deviceId = 0;
  private fanOutDebounceTimeout: number | undefined = undefined;
  private lastFanOut = Date.now();
  private previousState = INITIAL_ROOM_STATE;

  public constructor(
    private state: DurableObjectState,
    private env: CloudflareEnvironment,
    private DEBUG = env.ENVIRONMENT === 'dev',
    private JWKS = env.JKWS_URL
      ? createRemoteJWKSet(new URL(env.JKWS_URL))
      : undefined
  ) {
    this.store = configureStore({
      middleware: [
        () => (next) => (action) => {
          // Check that we haven't debounced for longer than 1 second already
          if (
            Date.now() - this.lastFanOut > 1000 &&
            this.fanOutDebounceTimeout
          ) {
            next(action);
            return;
          }
          // If we didn't previously have a fan out triggered, then trigger one
          if (!this.fanOutDebounceTimeout) {
            this.triggerFanOut();
            next(action);
            return;
          }

          // If we have a timeout triggered then clear and restart the debounce
          clearTimeout(this.fanOutDebounceTimeout);
          next(action);
          this.triggerFanOut();
        },
      ],
      reducer: {
        room: roomReducer,
      },
    });
    this.previousState = this.currentState;
  }

  get currentState(): pb.IState {
    return this.store.getState().room;
  }

  public async fetch(request: Request): Promise<Response> {
    const { headers } = request;
    try {
      const cookieHeader = headers.get('Cookie');
      if (!cookieHeader) {
        return statusText(401);
      }
      const cookies = parseCookies(cookieHeader);

      const token = await this.authenticate(cookies['CF_Authorization']);
      if (!token) {
        return statusText(403);
      }
      const { email } = token;
      if (typeof email !== 'string') {
        return statusText(400);
      }
      if (headers.get('Upgrade') === 'websocket') {
        return this.websocket(request, token);
      }
      return this.http(request, token);
    } catch (e) {
      return debugResponse(headers, e, this.DEBUG);
    }
  }

  public disconnectDevice(device: Device): void {
    const userDevices = this.getUserDevices(device.context.userId);
    userDevices.delete(device.deviceId);
  }

  private async http(_request: Request, _token: Token): Promise<Response> {
    return new Response('Please connect to this endpoint via websocket');
  }

  private async websocket(request: Request, token: Token): Promise<Response> {
    const protocol = request.headers.get('Sec-WebSocket-Protocol');

    const webSocketPair = new WebSocketPair();
    const headers =
      typeof protocol === 'string'
        ? { 'Sec-WebSocket-Protocol': protocol }
        : undefined;

    const ws = webSocketPair[1];

    const context = tokenToContext(token);
    const deviceId = this.deviceId++;
    const { userId } = context;
    const device = new Device(
      deviceId,
      context,
      ws,
      this,
      this.env.ENVIRONMENT === 'dev'
    );

    this.setUserDevice(userId, device);
    const userJoinAction = {
      context,
      payload: {},
    };

    this.store.dispatch(Actions.userJoin(userJoinAction));

    const setDeviceAction = {
      context,
      payload: {
        deviceId: deviceId.toString(),
        device: {},
      },
    };
    this.store.dispatch(Actions.setDevice(setDeviceAction));

    return new Response(null, {
      status: 101,
      webSocket: webSocketPair[0],
      headers,
    });
  }

  private fanOutStateDiff(): void {
    const latestState = this.currentState;
    const diff: pb.IStateChanges = {
      changes: generateStateDiff(this.previousState, latestState),
    };
    const bytes = pb.StateChanges.encode(diff).finish();

    [...this.clients.values()].forEach((devices: UserDevices) => {
      [...devices.values()].forEach((device: Device) =>
        device.sendStateDiff(bytes)
      );
    });

    this.previousState = latestState;
    this.lastFanOut = Date.now();
  }

  // move to auth.ts
  private async authenticate(jwt?: string): Promise<Token> {
    if (!jwt) {
      throw new Error('No JWT provided');
    }
    if (!this.JWKS) {
      throw new Error('JWT Decoding information not found');
    }

    const result = await jwtVerify(jwt, this.JWKS, {
      issuer: this.env.JKWS_ISSUER,
      audience: this.env.JKWS_AUDIENCE,
    });
    return (result.payload as unknown) as Token;
  }

  private getUserDevices(userId: string): UserDevices {
    if (!this.clients.has(userId)) this.clients.set(userId, new Map());
    return this.clients.get(userId)!;
  }

  private setUserDevice(userId: string, device: Device): void {
    this.getUserDevices(userId).set(device.deviceId, device);
  }

  private triggerFanOut(): void {
    this.fanOutDebounceTimeout = setTimeout(
      () => this.fanOutStateDiff(),
      DEBOUNCE_TIME
    );
  }
}

// A helper function until the code is re-written to use
// Kidsloop Authentication token
function tokenToContext(token: Token): Context {
  return {
    userId: token.sub,
    isTeacher: false,
    name: token.email,
  };
}
