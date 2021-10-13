import { debugResponse } from '../../responses/debug';
import { json } from '../../responses/json';
import { statusText } from '../../responses/statusText';
import { websocketUpgrade } from '../../responses/websocket';
import { authenticate, Context } from '../../utils/auth';
import { isError } from '../../utils/result';
import { Action, ClassAction, classReducer, ClassState, DeviceID, messageToClassAction, newDeviceId, pb, UserID } from 'kidsloop-live-state';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { User } from 'kidsloop-live-state/dist/protobuf';

let nextDeviceId = 1;
const generateDeviceId = () => newDeviceId(`${nextDeviceId++}`);
export class Room implements DurableObject {

  private clients = new Map<DeviceID, CloudflareWebsocket>();
  private store: EnhancedStore<ClassState, ClassAction>;

  public constructor(
    private readonly state: DurableObjectState,
    private readonly env: CloudflareEnvironment,
    private readonly DEBUG = env.ENVIRONMENT === 'dev',
  ) {
    this.store = configureStore<ClassState, ClassAction>({
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
    const deviceId = generateDeviceId();
    this.clients.set(deviceId, ws);

    ws.addEventListener('close', () => this.onWsClose(ws, deviceId));
    ws.addEventListener('message', ({ data }) => this.onWsMessage(ws, data, deviceId, context));
    ws.addEventListener('error', () => this.onWsError(ws, deviceId));
    ws.accept();

    const state = this.store.getState();
    const stateMessage = pb.ClassMessage.encode({ setRoomState: { state } }).finish();
    ws.send(stateMessage);

    this.dispatchAndBroadcast({
      deviceConnected: {
        name: context.name,
        role: context.role,
        device: {
          id: deviceId,
          userId: context.userId,
        }
      }
    });
  }

  private onWsMessage(ws: CloudflareWebsocket, data: ArrayBuffer | string, deviceId: DeviceID, context: Context) {
    if (!(data instanceof ArrayBuffer)) {
      console.log(`recieved non ArrayBuffer data: ${data}`);
      ws.close(4400, 'binary messages only');
      return;
    }

    const request = pb.ClassRequest.decode(new Uint8Array(data));
    const { requestId } = request;
    let error: string | undefined;
    let message: pb.IClassMessage | undefined;


    const state = this.store.getState();
    if(allowed(request, state, deviceId)) {
      message = convertCommandToEvent(request, context.userId, deviceId);
    } else {
      error = 'Not allowed';
    }

    const response = pb.ClassMessage.encode({
      ...message,
      response: {
        id: requestId,
        error,
      },
    }).finish();
    ws.send(response);

    if (!message) { console.log('parsing request into message failed'); return; }
    this.dispatchAndBroadcast(message, deviceId);
  }

  private onWsClose(ws: CloudflareWebsocket, deviceId: DeviceID) {
    console.log(`ws closed: ${deviceId}`);
    this.clients.delete(deviceId);
    this.dispatchAndBroadcast({ deviceDisconnected: { deviceId } });
  }


  private onWsError(ws: CloudflareWebsocket, deviceId: DeviceID) {
    console.log(`websocket Error on device(${deviceId})`);
    ws.close();
    this.clients.delete(deviceId);
    this.dispatchAndBroadcast({ deviceDisconnected: { deviceId } });
  }

  // This function should be atomic,
  // State replication messages and state updates must be processed in the same order.
  private dispatchAndBroadcast(message: pb.IClassMessage, skipDeviceId?: DeviceID) {
    const action = messageToClassAction(message);
    if (!action) { console.log('parsing message into redux action failed'); return; }
    this.store.dispatch(action);

    const broadcastData = pb.ClassMessage.encode(message).finish();
    this.clients.forEach((ws, deviceId) => {
      if(deviceId === skipDeviceId) { return; }
      try {
        ws.send(broadcastData);
      } catch (e) {
        ws.close(4500, 'ws send failure');
      }
    });
  }
}

const convertCommandToEvent = (requestProperties: pb.IClassRequest, userId: UserID, deviceId: DeviceID): pb.IClassMessage | undefined => {
  const request = pb.ClassRequest.create(requestProperties);
  if (!request.command) {
    console.log('request has no command. this should never happen');
    return;
  }

  if (request.endClass) {
    return {
      classEnded: {
        timestamp: Date.now(),
      }
    };
  } else if (request.setHost) {
    return {
      hostChanged: {
        ...request.setHost,
      }
    };
  } else if (request.setContent) {
    return {
      contentChanged: {
        ...request.setContent,
      }
    };
  } else if (request.sendChatMessage) {
    return {
      newChatMessage: {
        chatMessage: {
          ...request.sendChatMessage,
          timestamp: Date.now(),
          userId,
        },
      }
    };
  } else if (request.setActvityStreamId) {
    return {
      actvityStreamIdChanged: {
        deviceId,
        ...request.setActvityStreamId,
      }
    };
  } else if (request.rewardTrophyToUser) {
    return {
      trophyRewardedToUser: {
        ...request.rewardTrophyToUser
      }
    };
  } else if (request.rewardTrophyToAll) {
    return {
      trophyRewardedToAll: {
        ...request.rewardTrophyToAll
      }
    };
  } else {
    console.error('Network Message and ClassRequest are out of sync. It is likely that the application must be updated to a newer protocol version');
    return;
  }
};

function allowed(request: pb.ClassRequest, state: ClassState, deviceId: DeviceID): boolean {
  
  const device = state.devices[deviceId];
  const user = state.users[device.userId];

  switch(request.command) {
    case 'endClass':
    case 'setContent':
    case 'rewardTrophyToAll':
    case 'rewardTrophyToUser':
    case 'setHost':
      return state.hostUserId === user.id;
    case 'setActvityStreamId':
    case 'sendChatMessage':
      return true;
    default:
      console.error(`Rejecting unknown command type '${request.command}'`);
      return false;
  }
}