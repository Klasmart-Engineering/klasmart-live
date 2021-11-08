import { debugResponse } from '../../responses/debug';
import { json } from '../../responses/json';
import { statusText } from '../../responses/statusText';
import { websocketUpgrade } from '../../responses/websocket';
import { authenticate, Context } from './authentication';
import { ClassAction, classReducer, ClassState, DeviceID, messageToClassAction, pb } from 'kidsloop-live-state/server';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { Client } from './client';
import { isError } from './result';
import { isAuthorized } from './authorization';
import { requestToMessage } from './requestToMessage';

export class Room implements DurableObject {

  private clients = new Set<Client>();
  private store: EnhancedStore<ClassState, ClassAction>;

  public constructor(
    /* eslint-disable no-unused-vars */
    private readonly state: DurableObjectState,
    private readonly env: CloudflareEnvironment,
    private readonly DEBUG = env.ENVIRONMENT === 'dev',
    private readonly id = state.id.toString(),
    /* eslint-enable no-unused-vars */
  ) {
    this.store = configureStore<ClassState, ClassAction>({
      reducer: classReducer,
    });
  }

  public async fetch(request: Request): Promise<Response> {
    const { headers } = request;
    try {
      if (headers.get('Upgrade') !== 'websocket') {
        if (this.DEBUG) {
          const state = this.store.getState();
          return json({this: this, state}, 200, 2); 
        }
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
      this.addClient(ws, context);
      return response;
    } catch (e) {
      return debugResponse(headers, e, this.DEBUG);
    }
  }

  private addClient(ws: CloudflareWebsocket, context: Context) {
    const client = new Client(ws);
    this.clients.add(client);

    client.onRequest = (request: pb.ClassRequest) => this.onClientRequest(client, request, context);
    client.onTerminate = (client:Client) => this.onClientTermination(client),

    // Update state with new user
    this.dispatchAndBroadcastOthers(
      {
        deviceConnected: {
          name: context.name,
          role: context.role,
          device: {
            id: client.deviceId,
            userId: context.userId,
          }
        }
      },
      client.deviceId,
    );

    // Send updated state to user
    const state = this.store.getState();
    client.send({ setRoomState: { state } });
  }

  private onClientRequest(client: Client, request: pb.ClassRequest, context: Context) {
    const { deviceId } = client;
    const { requestId } = request;
    console.log('1');
    // if(!isAuthorized(request, this.store.getState(), deviceId)) {
    //   client.send({
    //     response: {
    //       id: requestId,
    //       error: 'Not allowed',
    //     },
    //   });
    //   return;
    // }
    console.log('2');

    const message = requestToMessage(request, context.userId, deviceId);
    if (!message) { console.log('parsing request into message failed'); return; }
    console.log('3');

    client.send({
      ...message,
      response: {
        id: requestId,
      },
    });
    console.log('4');

    this.dispatchAndBroadcastOthers(message, deviceId);
    console.log('5');

  }

  private onClientTermination(client: Client) {
    const { deviceId } = client;
    this.clients.delete(client);
    this.dispatchAndBroadcastOthers({ deviceDisconnected: { deviceId } }, deviceId);
  }

  // These broadcast functions should be atomic,
  // State replication messages and state updates must be processed in the same order.
  private dispatchAndBroadcastOthers(message: pb.IClassMessage, skipDeviceId: DeviceID) {
    const action = messageToClassAction(message);
    if (!action) { console.log('parsing message into redux action failed'); return; }
    this.store.dispatch(action);

    const bytes = pb.ClassMessage.encode(message).finish();
    this.clients.forEach((client) => {
      if(client.deviceId === skipDeviceId) { return; }
      client.send(bytes);
    });
  }
}
