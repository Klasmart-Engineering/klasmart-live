import { Room } from './room';
import { Context, ContextPayload, Actions } from 'kidsloop-live-state';
import pb from 'kidsloop-live-serialization';

const HEARTBEAT_INTERVAL = 5000;
const HEARTBEAT_RESPONSE_INTERVAL = 5;

export class Device {
  private heartbeatResponseCounter = 0;

  constructor(
    public readonly deviceId: string,
    public readonly context: Context,
    private ws: CloudflareWebsocket,
    private readonly room: Room,
    private readonly DEBUG: boolean,
    private lastHeartbeat: number | undefined = undefined
  ) {
    ws.accept();

    // @TODO tidy this up.
    // Essentially we need to send the current state of the server as soon as
    // the socket is initialized
    const message = { changes: [{ setState: this.room.currentState }] };
    const bytes = pb.StateChanges.encode(message).finish();
    ws.send(bytes);

    ws.addEventListener('message', async ({ data }) => {
      if (!(data instanceof ArrayBuffer)) {
        this.onClose(4401, 'Binary only protocol');
        return;
      }

      const acknowledgement: pb.IActionAcknowledgement = {
        id: 'Undefined Action ID',
      };
      let sendAcknowledgement = true;

      // Manage the heartbeat
      clearTimeout(this.lastHeartbeat);
      this.lastHeartbeat = setTimeout(() => {
        this.onClose(4408, 'No heartbeat received - websocket timed out');
      }, HEARTBEAT_INTERVAL);

      try {
        const action = pb.Action.decode(new Uint8Array(data));
        acknowledgement.id = action.id;
        let actionToDispatch = null;
        switch (action.action) {
          case 'heartbeat':
            // We could respond to every heartbeat, however this would increase
            // network traffic.
            //
            // So this responds to 1 in 5 heartbeats
            if (this.heartbeatResponseCounter > 1) {
              this.heartbeatResponseCounter--;
              sendAcknowledgement = false;
            } else {
              this.heartbeatResponseCounter = HEARTBEAT_RESPONSE_INTERVAL;
            }
            break;
          case 'setDevice':
          case 'removeDevice':
          case 'setWebRtcStream':
          case 'setActivity':
          case 'setHost':
          case 'addTrophy':
          case 'setContent':
          case 'sendChatMessage': {
            const actionKind = action.action;
            const realAction = action[actionKind];
            if (!realAction) {
              throw Error(
                `Protobuf did not generate Action correctly. Expected ${actionKind} to exist on Action`
              );
            }
            const contextAction = {
              context: this.context,
              payload: realAction,
            };
            actionToDispatch = Actions[actionKind](contextAction);
            break;
          }
          case 'userJoin':
          case 'userLeave':
            acknowledgement.error =
              'This action type should be generated automatically, there should be no need to send this to the server';
            break;
          case 'endClass':
            // @TODO
            break;
          default:
            acknowledgement.error = 'Unidentified action type provided';
            break;
        }
        if (actionToDispatch) {
          this.room.store.dispatch(actionToDispatch);
        }
      } catch (e) {
        console.log(e);
        acknowledgement.error = 'Unexpected error occurred';
      } finally {
        const receipt = pb.ActionAcknowledgement.encode(
          acknowledgement
        ).finish();
        if (sendAcknowledgement) {
          ws.send(receipt);
        }
      }
    });
    ws.addEventListener('error', async (e) => {
      console.error(e);
    });
    ws.addEventListener('close', async (c, r) => this.onClose(c, r));
  }

  public sendStateDiff(bytes: Uint8Array): void {
    this.ws.send(bytes);
  }

  private onClose(_close?: number, _reason?: string) {
    console.log('Disconnecting device', _close, _reason);
    this.room.disconnectDevice(this);
  }
}
