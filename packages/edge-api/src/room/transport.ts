import { Room } from "./room"
import { Network } from "kidsloop-live-serialization"
const { ClientMessage, ServerMessage } = Network

export class Transport {
    constructor(
      public readonly deviceId: number,
      public readonly userId: number,
      private readonly ws: CloudflareWebsocket,
      private readonly env: CloudflareEnvironment,
      private readonly room: Room,
      private readonly DEBUG = env.ENVIRONMENT === "dev",
      private lastMessageTimestamp = Date.now(),
    ) {
      ws.addEventListener('message', ({ data }) => this.onMessage(data))
      ws.addEventListener('error', (e) => this.onError(e))
      ws.addEventListener('close', (c, r) => this.onClose(c, r))
      ws.accept()
  
      const roomId = room.id
      const message = ServerMessage.encode({ roomId }).finish()
  
      ws.send(message)
    }

    public checkForTimeout(timeoutMilliseconds: number): boolean {
      const millisecondsSinceLastMessage = Date.now() - this.lastMessageTimestamp
      if(millisecondsSinceLastMessage < timeoutMilliseconds) { return false }

      this.close(4408, "Timeout")
      return true
    }

    private close(code?: number, reason?: string) {
      this.ws.close(code, reason)
      this.room.leave(this)
    }

    private onMessage(data: unknown) {
      this.lastMessageTimestamp = Date.now();
      if (!(data instanceof ArrayBuffer)) { this.close(4401, "Binary only protocol"); return }
      try {
        const { chatMessages, activityStream, roomAction } = ClientMessage.decode(new Uint8Array(data))
        for(const text of chatMessages) { this.room.chatMessage(this.userId, text) }
        
      } catch (e) {
        this.close(4400, "Invalid message")
      }
    }
  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private onClose(close?: number, reason?: string) {
      this.room.leave(this)
    }
  
    // When does cloudflare invoke onError?
    // At time of writting the docs are currently useless
    // "An event indicating there was an error with the WebSocket."
    // https://developers.cloudflare.com/workers/runtime-apis/websockets#events
    private onError(e: unknown) {
      let errorString = "Unknown Error"
      try {
        if (this.DEBUG) { errorString = (e as any).toString() }
      } catch(e) {
        console.error(e)
      } finally {
        this.room.leave(this)
        this.close(4500, errorString) // Is this neccessary?
      }
    }
  }