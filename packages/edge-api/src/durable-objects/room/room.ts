import { debugResponse } from '../../responses/debug';
import { json } from '../../responses/json';
import { statusText } from '../../responses/statusText';
import { websocketUpgrade } from '../../responses/websocket';
import { authenticate, Context } from '../../utils/auth';
import { isError } from '../../utils/result';
import { nanoid } from 'nanoid';
import { ClassAction, classReducer, ClassState, convertCommandToEvent, DeviceID, messageToClassAction, newDeviceId, pb } from 'kidsloop-live-state';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

export class Room implements DurableObject {

  private clients = new Map<DeviceID, CloudflareWebsocket>();
  private store: EnhancedStore<ClassState, ClassAction>;

  public constructor(
    private readonly state: DurableObjectState,
    private readonly env: CloudflareEnvironment,
    private readonly DEBUG = env.ENVIRONMENT === 'dev',
  ) {
    this.store = configureStore<ClassState, ClassAction>( {
      reducer: classReducer,
    });
  }

  public async fetch(request: Request): Promise<Response> {
    const { headers } = request;
    try {
      if (headers.get('Upgrade') !== 'websocket') {
        if (this.DEBUG) { return json(this, 200, 2); }
        return statusText(400, 'Please connect to this endpoint via websocket');
      }

      const authenticationResult = await authenticate(
        request,
        this.env.JWKS_URL,
        {
          issuer: this.env.JWKS_ISSUER,
          audience: this.env.JWKS_AUDIENCE,
        }
      );
      if (isError(authenticationResult)) { return authenticationResult.payload; }
      const context = authenticationResult.payload;

      const protocol = request.headers.get('Sec-WebSocket-Protocol');
      const { response, ws } = websocketUpgrade(protocol);

      this.setupWebsocket(ws, context);
      return response;
    } catch (e) {
      return debugResponse(headers, e, this.DEBUG);
    }
  }

  private setupWebsocket(ws: CloudflareWebsocket, context: Context) {
    const deviceId = newDeviceId(nanoid());
    this.clients.set(deviceId, ws);

    ws.addEventListener('close', () => this.onWsClose(ws, deviceId));
    ws.addEventListener('message', ({ data }) => this.onWsMessage(ws, data, deviceId, context));
    ws.addEventListener('error', () => this.onWsError(ws, deviceId));
    ws.accept();

    const event: pb.IDeviceConnectedEvent = {
      name: context.name,
      role: context.role,
      device: {
        id: deviceId,
        userId: context.userId,
      }
    };
    const message: pb.IClassMessage = {deviceConnected: event};
    const action = messageToClassAction(message);
    if (!action) {
      console.log('parsing message into redux action failed');
      return;
    }
    this.store.dispatch(action);
    this.broadcast(message);
  }

  private onWsMessage(ws: CloudflareWebsocket, data: ArrayBuffer | string, deviceId: DeviceID, context: Context) {
    if (!(data instanceof ArrayBuffer)) {
      console.log('recieved non ArrayBuffer data: ' + data);
      this.onWsClose(ws, deviceId);
      return;
    }
    const request = pb.ClassRequest.decode(new Uint8Array(data));
    const message = convertCommandToEvent(request, context.userId, deviceId);
    if (!message) {
      console.log('parsing request into message failed');
      return;
    }
    const action = messageToClassAction(message);
    if (!action) {
      console.log('parsing message into redux action failed');
      return;
    }
    this.store.dispatch(action);
    this.broadcast(message);
  }

  private onWsClose(ws: CloudflareWebsocket, deviceId: DeviceID) {
    console.log('ws closed: ' + deviceId);
    this.clients.delete(deviceId);
    const event: pb.IDeviceDisconnectedEvent = {
      deviceId: deviceId,
    };
    const message: pb.IClassMessage = {deviceDisconnected: event};
    const action = messageToClassAction(message);
    if (!action) {
      console.log('parsing message into redux action failed');
      return;
    }
    this.store.dispatch(action);
    this.broadcast(message);
  }

  private onWsError(ws: CloudflareWebsocket, deviceId: DeviceID) {
    console.log('ws errored: ' + deviceId);
    this.clients.delete(deviceId);
    const event: pb.IDeviceDisconnectedEvent = {
      deviceId: deviceId,
    };
    const message: pb.IClassMessage = {deviceDisconnected: event};
    const action = messageToClassAction(message);
    if (!action) {
      console.log('parsing message into redux action failed');
      return;
    }
    this.store.dispatch(action);
    this.broadcast(message);
  }

  private broadcast(message: pb.IClassMessage) {
    [...this.clients.values()].forEach((client) => {
      const bytes = pb.ClassMessage.encode(message).finish();
      client.send(bytes);
    });
  }

}