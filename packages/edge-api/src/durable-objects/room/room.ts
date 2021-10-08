import { debugResponse } from '../../responses/debug';
import { json } from '../../responses/json';
import { statusText } from '../../responses/statusText';
import { websocketUpgrade } from '../../responses/websocket';
import { authenticate } from '../../utils/auth';
import { isError } from '../../utils/result';
import { nanoid } from 'nanoid';
import { ClassRequest } from 'kidsloop-live-state/dist/protobuf';


export class Room implements DurableObject {

  private clients: Map<string, CloudflareWebsocket>;

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
    this.clients = new Map();
  }

  public async fetch(request: Request): Promise<Response> {
    const { headers } = request;
    try {
      if (headers.get('Upgrade') !== 'websocket') {
        if(this.DEBUG) { return json(this, 200, 2); }
        return statusText(400, 'Please connect to this endpoint via websocket');
      }

      // const authenticationResult = await authenticate(request, this.JWKS_URL, this.jwtOptions);
      // if(isError(authenticationResult)) { return authenticationResult.payload; }
      // const context = authenticationResult.payload;

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
    ws.addEventListener('message', ({data}) => this.onWsMessage(ws, id, data));
    ws.addEventListener('error', () => this.onWsError(ws, id));
    ws.accept();
  }

  private onWsMessage(ws: CloudflareWebsocket, id: string, data: ArrayBuffer | string) {
    if (!(data instanceof ArrayBuffer)) {
      console.log('recieved non ArrayBuffer data: ' + data);
      this.onWsClose(ws, id);
      return;
    }

    const request = ClassRequest.decode(new Uint8Array(data));
    switch (request.type) {
      case undefined:
        console.log('request has no type. this should never happen');
        return;
      // other cases...
    }
  }

  private onWsClose(ws: CloudflareWebsocket, id: string) {
    console.log('ws closed: ' + id);
    this.clients.delete(id);
  }

  private onWsError(ws: CloudflareWebsocket, id: string) {
    console.log('ws errored: ' + id);
    this.clients.delete(id);
  }

}

