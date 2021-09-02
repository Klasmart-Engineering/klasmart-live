import { error } from "../responses/error"
import { json } from "../responses/json"
import { statusText } from "../responses/statusText"
import { websocketUpgrade } from "../responses/websocket"
import { Heartbeat, RoomState } from "kidsloop-live-serialization"

export class Room implements DurableObject {
  public constructor(
    private state: DurableObjectState,
    private env: CloudflareEnvironment,
    private DEBUG = env.ENVIRONMENT === "dev",
  ) { }

  private open(ws: CloudflareWebsocket) {
    const roomId = this.state.id.toString()    
    const message = RoomState.encode({ roomId }).finish()
    ws.send(message)

    this.broadcastConnectionCount()
  }

  private close(ws: CloudflareWebsocket, id: number) {
    this.websockets.delete(id);
    this.deleted.push(id);
    this.broadcastConnectionCount()
  }

  private broadcastConnectionCount(skip?: number) {
    const connectionCount = this.websockets.size
    const message = RoomState.encode({ connectionCount }).finish()
    for(const [id,websocket] of this.websockets) {
      if(id === skip) { continue }
      websocket.send(message)
    }
  }

  private lastHeartbeat = new Date().getTime();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private message(ws: CloudflareWebsocket, data: unknown) { 
    if(!(data instanceof ArrayBuffer)) { ws.close(4401, "Binary only protocol"); return }
    try {
        Heartbeat.decode(new Uint8Array(data))
        this.lastHeartbeat = new Date().getTime();
    } catch(e) {
        ws.close(4400, "Parsing HeartBeat failed")
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async fetch(request: Request): Promise<Response> {
    const { headers } = request
    try {
      if (headers.get('Upgrade') === 'websocket') {
        const protocol = headers.get('Sec-WebSocket-Protocol')
        if(protocol === "live") { return this.accept() }
      }

      const websockets = [...this.websockets.entries()].map(([id]) => id)
      return json({websockets, id: this.state.id.toString(), this: this, request}, 200, 2)
    } catch (e) {
      return error(headers, e, this.DEBUG)
    }
    // This should be unreachable
    return statusText(501)
  }

  private deleted: number[] = []
  private websocketId = 0
  private websockets = new Map<number,CloudflareWebsocket>()
  private accept(): Response {
    const { response, ws } = websocketUpgrade("live")

    const id = this.websocketId++
    ws.addEventListener('message', (e) => this.message(ws, e.data))
    ws.addEventListener('error', (e) => {
      let errorString = "Unknown Error"
      try {
        if (this.DEBUG) { errorString = (e as any).toString() }
      } finally {
        this.websockets.delete(id);
        this.deleted.push(id);
        ws.close(4500, errorString)
      }
    })

    ws.accept()
    setTimeout(() => {
      this.websockets.set(id,ws)
      this.open(ws)
    }, 0)

    return response
  }

}
