import { Room } from './room';
import { Context, ContextPayload, Actions } from 'kidsloop-live-state';
import pb from 'kidsloop-live-serialization';

const HEARTBEAT_INTERVAL = 5000;

export class Device {
  constructor(
    public readonly deviceId: number,
    public readonly context: Context,
    private readonly ws: CloudflareWebsocket,
    private readonly room: Room,
    private readonly DEBUG: boolean,
    private lastHeartbeat: number | undefined = undefined
  ) {
    ws.addEventListener('message', ({ data }) => {
      if (!(data instanceof ArrayBuffer)) {
        this.onClose(4401, 'Binary only protocol');
        return;
      }
      const response: pb.IActionAcknowledgement = {
        id: 'Undefined Action ID',
      };
      clearTimeout(this.lastHeartbeat);
      this.lastHeartbeat = setTimeout(() => {
        this.onClose(4408, 'No heartbeat received - websocket timed out');
      }, HEARTBEAT_INTERVAL);

      try {
        const action = pb.Action.decode(new Uint8Array(data));
        const contextAction = {
          context: this.context,
          payload: action,
        };
        let actionToDispatch = null;
        switch (action.action) {
          case 'heartbeat':
            break;
          case 'setDevice':
            actionToDispatch = Actions.setDevice(contextAction as ContextPayload<pb.ISetDevice>);
            break;
          // case 'removeDevice':
          //   actionToDispatch = Actions.removeDevice(contextAction);
          //   break;
          case 'setWebRtcStream':
            actionToDispatch = Actions.setWebRtcStream(contextAction as ContextPayload<pb.ISetDevice>);
            break;
          // case 'setActivity':
          //   actionToDispatch = Actions.setActivity(contextAction);
          //   break;
          case 'setHost':
            actionToDispatch = Actions.setHost(contextAction as ContextPayload<pb.ISetHost>);
            break;
          case 'addTrophy':
            actionToDispatch = Actions.addTrophy(contextAction as ContextPayload<pb.IAddTrophy>);
            break;
          case 'setContent':
            actionToDispatch = Actions.setContent(contextAction as ContextPayload<pb.ISetContent>);
            break;
          case 'sendChatMessage':
            actionToDispatch = Actions.sendChatMessage(contextAction as ContextPayload<pb.ISendChatMessage>);
            break;
          case 'userJoin':
          case 'userLeave':
            response.error =
              'This action type should be generated automatically, there should be no need to send this to the server';
            break;
          case 'endClass':
          default:
            response.error = 'Unidentified action type provided';
            break;
        }
        if (actionToDispatch) {
          this.room.store.dispatch(actionToDispatch);
        }
      } catch (e) {
        console.log(e);
        response.error = 'Unexpected error occurred';
      } finally {
        const receipt = pb.ActionAcknowledgement.encode(response).finish();
        ws.send(receipt);
      }
    });
    ws.addEventListener('error', (e) => {
      console.error(e);
    });
    ws.addEventListener('close', (c, r) => this.onClose(c, r));
    ws.accept();
  }

  public sendStateDiff(diff: pb.IStateChanges): void {
    const data = pb.StateChanges.encode(diff).finish();
    this.ws.send(data);
  }

  /*
  private onMessage(data: unknown) {
    this.lastMessageTimestamp = Date.now();
    if (!(data instanceof ArrayBuffer)) {
      this.close(4401, "Binary only protocol");
      return;
    }
    try {
      const { chatMessages, activityStream, roomAction } = ClientMessage.decode(
        new Uint8Array(data)
      );
      for (const text of chatMessages) {
        this.room.chatMessage(this.userId, text);
      }
    } catch (e) {
      this.close(4400, "Invalid message");
    }
  }
  */

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private onClose(_close?: number, _reason?: string) {
    this.room.disconnectDevice(this);
  }

  /*
  // When does cloudflare invoke onError?
  // At time of writting the docs are currently useless
  // "An event indicating there was an error with the WebSocket."
  // https://developers.cloudflare.com/workers/runtime-apis/websockets#events
  private onError(e: unknown) {
    let errorString = "Unknown Error";
    try {
      if (this.DEBUG) {
        errorString = (e as any).toString();
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.room.leave(this);
      this.close(4500, errorString); // Is this neccessary?
    }
  }
  */
}
