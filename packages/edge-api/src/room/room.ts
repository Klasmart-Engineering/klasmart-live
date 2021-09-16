import { debugResponse } from '../responses/debug';
import { statusText } from '../responses/statusText';
import { Device } from './device';
import {
  configureStore,
  Dispatch,
  EnhancedStore,
  Middleware,
} from '@reduxjs/toolkit';
import { Server, Context } from 'kidsloop-live-state';
import pb from 'kidsloop-live-serialization';
import { websocketUpgrade } from '../responses/websocket';
import { authenticate } from '../utils/auth';
import { isError } from '../utils/result';

const { roomReducer, Actions, INITIAL_ROOM_STATE, generateStateDiff } = Server;

type UserDevices = Map<string, Device>;

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
    private readonly state: DurableObjectState,
    private readonly env: CloudflareEnvironment,
    private readonly DEBUG = env.ENVIRONMENT === 'dev',
    private readonly JWKS_URL = env.JKWS_URL,
    private readonly jwtOptions = {
      issuer: env.JKWS_ISSUER,
      audience: env.JKWS_AUDIENCE,
    },
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
      if (headers.get('Upgrade') !== 'websocket') {
        return statusText(400, 'Please connect to this endpoint via websocket');
      }

      const authenticationResult = await authenticate(request, this.JWKS_URL, this.jwtOptions);
      if(isError(authenticationResult)) { return authenticationResult.payload; }
      const context = authenticationResult.payload;

      const protocol = request.headers.get('Sec-WebSocket-Protocol');
      const { response, ws } = websocketUpgrade(protocol);
      
      this.addNewDevice(context, ws);
      return response;
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


  /**
   * Creates and adds a new device to both the redux store and the internal list
   * of connected client devices
   */
  private addNewDevice(context: Context, ws: CloudflareWebsocket): void {
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

