import { debugResponse } from '../../responses/debug';
import { json } from '../../responses/json';
import { statusText } from '../../responses/statusText';
import { websocketUpgrade } from '../../responses/websocket';
import { authenticate } from '../../utils/auth';
import { isError } from '../../utils/result';
import { nanoid } from 'nanoid';
import { ClassRequest, IClassEvent, RewardTrophyToUserRequest, SendChatMessageRequest, SetActivityStreamIdRequest, SetContentRequest, SetHostRequest } from 'kidsloop-live-state/dist/protobuf';
import { Client } from 'kidsloop-live-state';
import { configureStore, Dispatch, EnhancedStore, Middleware } from '@reduxjs/toolkit';

const createFanOutMiddleware = (room: Room): Middleware<Dispatch> => {
  const fanOutMiddleware: Middleware<Dispatch> = () => (next) => (action) => {
    if (Date.now() - room.lastFanOut < 750) {
      if (room.fanOutDebounceTimeout !== undefined)
        clearTimeout(room.fanOutDebounceTimeout);
    }
    // room.triggerFanOut();
    next(action);
  };
  return fanOutMiddleware;
};

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
      reducer: Client.classReducer,
      middleware: [
        createFanOutMiddleware(this)
      ],
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

      this.setupWebsocket(ws);
      return response;
    } catch (e) {
      return debugResponse(headers, e, this.DEBUG);
    }
  }

  private setupWebsocket(ws: CloudflareWebsocket) {
    const id = nanoid();
    this.clients.set(id, ws);
    ws.addEventListener('close', () => this.onWsClose(ws, id));
    ws.addEventListener('message', ({ data }) => this.onWsMessage(ws, id, data));
    ws.addEventListener('error', () => this.onWsError(ws, id));
    ws.accept();
    // DeviceConnect
    // this.store.dispatch()

  }

  private onWsMessage(ws: CloudflareWebsocket, id: string, data: ArrayBuffer | string) {
    if (!(data instanceof ArrayBuffer)) {
      console.log('recieved non ArrayBuffer data: ' + data);
      this.onWsClose(ws, id);
      return;
    }
    const requestWrapper = ClassRequest.decode(new Uint8Array(data));
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

}

