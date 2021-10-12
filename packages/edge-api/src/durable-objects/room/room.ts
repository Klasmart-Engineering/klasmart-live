import { debugResponse } from '../../responses/debug';
import { json } from '../../responses/json';
import { statusText } from '../../responses/statusText';
import { websocketUpgrade } from '../../responses/websocket';
import { authenticate, Context } from '../../utils/auth';
import { isError } from '../../utils/result';
import { nanoid } from 'nanoid';
import { classReducer, newDeviceId, pb } from 'kidsloop-live-state';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { ClassMessage } from 'kidsloop-live-state/dist/protobuf';

export class Room implements DurableObject {

  public fanOutDebounceTimeout: number | undefined = undefined;
  public lastFanOut = Date.now();

  private clients = new Map<string, CloudflareWebsocket>();
  private store: EnhancedStore

  public constructor(
    private readonly state: DurableObjectState,
    private readonly env: CloudflareEnvironment,
    private readonly DEBUG = env.ENVIRONMENT === 'dev',
  ) {
    this.store = configureStore( {
      reducer: classReducer,
      middleware: [],
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
    ws.addEventListener('message', ({ data }) => this.onWsMessage(ws, deviceId, data));
    ws.addEventListener('error', () => this.onWsError(ws, deviceId));
    ws.accept();

    const connectEvent: pb.IDeviceConnectedEvent = {
      name: context.name,
      role: context.role,
      device: {
        id: deviceId,
        userId: context.userId,
      }
    };
    // this.store.dispatch()
  }

  private onWsMessage(ws: CloudflareWebsocket, id: string, data: ArrayBuffer | string) {
    if (!(data instanceof ArrayBuffer)) {
      console.log('recieved non ArrayBuffer data: ' + data);
      this.onWsClose(ws, id);
      return;
    }
    const requestWrapper = ClassMessage.decode(new Uint8Array(data));
    // this.store.dispatch()
  }

  private onWsClose(ws: CloudflareWebsocket, id: string) {
    console.log('ws closed: ' + id);
    this.clients.delete(id);
    // DisconnectDevice
    // this.store.dispatch()
  }

  private onWsError(ws: CloudflareWebsocket, id: string) {
    console.log('ws errored: ' + id);
    this.clients.delete(id);
    // DisconnectDevice
    // this.store.dispatch()
  }

  private broadcast() {
    throw new Error('Not implemented');
  }

}

