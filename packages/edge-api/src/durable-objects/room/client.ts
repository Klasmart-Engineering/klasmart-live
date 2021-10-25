import { newDeviceId, pb } from 'kidsloop-live-state/server';
import { idGenerator } from './idGenerator';

export class Client {
  static generateDeviceId = idGenerator(newDeviceId);

  public readonly deviceId = Client.generateDeviceId()
  public onTerminate?: (client: Client) => unknown
  public onRequest?: (request: pb.ClassRequest) => unknown

  private hasTerminated = false

  private recieveTimeoutReference?: number
  private recieveMessageTimeoutTime = 5000

  private keepAliveTimeoutReference?: number
  private sendKeepAliveMessageInterval = 1000

  constructor(
    private readonly ws: CloudflareWebsocket,
  ) {
    ws.addEventListener('message', ({ data }) => {
      this.resetNetworkTimeout();
      if (!(data instanceof ArrayBuffer)) {
        console.log(`recieved non ArrayBuffer data: ${data}`);
        this.terminate(4400, 'binary messages only');
        return;
      }
      if (!this.onRequest) { return; }
      try {
        const request = pb.ClassRequest.decode(new Uint8Array(data));
        this.onRequest(request);
      } catch (e) {
        // This message (most likely) wasn't encoded with protocol buffers
        this.terminate(4400, 'malformed message');
      }
    });
    ws.addEventListener('close', () => this.terminate());
    ws.addEventListener('error', () => this.terminate());
    ws.accept();
    this.resetNetworkTimeout();
  }

  public send(message: pb.IClassMessage | Uint8Array): void {
    try {
      const bytes = message instanceof Uint8Array
        ? message
        : pb.ClassMessage.encode(message).finish();
      this.ws.send(bytes);
      if (this.keepAliveTimeoutReference) { clearTimeout(this.keepAliveTimeoutReference); }
      setTimeout(() => this.send(new Uint8Array(0)), this.sendKeepAliveMessageInterval);
    } catch (e) {
      this.terminate(4500, 'ws send failure');
    }
  }

  public terminate(code?: number, reason?: string): void {
    if (this.hasTerminated) { return; }
    this.hasTerminated = true;

    console.log(`Disconnecting client(${this.deviceId}) with code(${code}): ${reason}`);
    if (this.onTerminate) { this.onTerminate(this); };
    try {
      // Most client disconnects from google chrome will trigger an error here
      this.ws.close(code, reason);
      // eslint-disable-next-line no-empty
    } catch (e) { }
  }

  private resetNetworkTimeout(): void {
    // Enable this when the client implments sending keep alive messages 
    // if(this.recieveTimeoutReference !== undefined) { clearTimeout(this.recieveTimeoutReference); }
    // this.recieveTimeoutReference = setTimeout(() => this.terminate(4400,'timeout'), this.recieveMessageTimeoutTime);
  }
}