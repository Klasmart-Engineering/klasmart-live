import { debugResponse } from '../responses/debug';
import { statusText } from '../responses/statusText';
import { parse as parseCookies } from 'cookie';
import { createRemoteJWKSet } from 'jose-browser-runtime/jwks/remote';
import { jwtVerify } from 'jose-browser-runtime/jwt/verify';
import { Device } from './device';
import {
  configureStore,
  Dispatch,
  EnhancedStore,
  Middleware,
} from '@reduxjs/toolkit';
import { Server, Context } from 'kidsloop-live-state';
import pb from 'kidsloop-live-serialization';

const { roomReducer, Actions, INITIAL_ROOM_STATE, generateStateDiff } = Server;

type UserDevices = Map<string, Device>;

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

const loggerMiddleware: Middleware<Dispatch> = (store) => (next) => (
  action
) => {
  console.log('dispatching: ' + JSON.stringify(action));
  const result = next(action);
  console.log('next state: ' + JSON.stringify(store.getState().room));
  return result;
};

const createFanOutMiddleware = (room: Room): Middleware<Dispatch> => {
  const fanOutMiddleware: Middleware<Dispatch> = () => (next) => (action) => {
    if (Date.now() - room.lastFanOut < 750) {
      if (room.fanOutDebounceTimeout !== undefined)
        clearTimeout(room.fanOutDebounceTimeout);
    }
    room.triggerFanOut();
    next(action);
  };
  return fanOutMiddleware;
};

const DEBOUNCE_TIME = 300;

export class Room implements DurableObject {
  public store: EnhancedStore;
  public fanOutDebounceTimeout: number | undefined = undefined;
  public lastFanOut = Date.now();

  private connectedDevices = new Map<string, UserDevices>();
  private teachers = new Set<string>();

  private deviceId = 0;
  private previousState: pb.IState;

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
        createFanOutMiddleware(this),
        ...(DEBUG ? [loggerMiddleware] : []),
      ],
      reducer: {
        room: roomReducer,
      },
      preloadedState: {
        room: {
          ...INITIAL_ROOM_STATE,
          roomId: this.state.id.toString(),
        },
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

  /**
   * Triggers the room to send out the latest state changes to all connected
   * clients that have occurred since the last fan out
   *
   * The actual fan out is debounced
   */
  public triggerFanOut(): void {
    this.fanOutDebounceTimeout = setTimeout(() => {
      const latestState = this.currentState;
      const diff: pb.IStateChanges = {
        changes: generateStateDiff(this.previousState, latestState),
      };
      if ((diff.changes?.length || 0) > 0) {
        const bytes = pb.StateChanges.encode(diff).finish();
        [...this.connectedDevices.values()].forEach((devices: UserDevices) => {
          [...devices.values()].forEach((device: Device) =>
            device.sendProtobufBytes(bytes)
          );
        });
      }
      this.previousState = latestState;
      this.lastFanOut = Date.now();
      this.fanOutDebounceTimeout = undefined;
    }, DEBOUNCE_TIME);
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
    this.addNewDevice(token, ws);

    return new Response(null, {
      status: 101,
      webSocket: webSocketPair[0],
      headers,
    });
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

  /**
   * Creates and adds a new device to both the redux store and the internal list
   * of connected client devices
   */
  private addNewDevice(token: Token, ws: CloudflareWebsocket): void {
    const context = tokenToContext(token);
    const deviceId = `${this.deviceId++}`;
    const { userId } = context;
    const device = new Device(deviceId, context, ws, this, this.DEBUG);

    this.setUserDevice(userId, device);

    const userJoinAction = {
      context,
      payload: {},
    };

    this.store.dispatch(Actions.userJoin(userJoinAction));

    const setDeviceAction = {
      context,
      payload: {
        deviceId,
        device: {},
      },
    };
    this.store.dispatch(Actions.setDevice(setDeviceAction));
  }

  private getUserDevices(userId: string): UserDevices {
    if (!this.connectedDevices.has(userId)) {
      this.connectedDevices.set(userId, new Map());
    }
    return this.connectedDevices.get(userId)!;
  }

  private setUserDevice(userId: string, device: Device): void {
    const userDevices = this.getUserDevices(userId);
    userDevices.set(device.deviceId, device);
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
