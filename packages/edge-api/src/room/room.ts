import { debugResponse } from "../responses/error"
import { json } from "../responses/json"
import { statusText } from "../responses/statusText"
import { websocketUpgrade } from "../responses/websocket"
import { RoomClient } from "./room-client"

export class Room implements DurableObject {
  private clients = new Map<number, RoomClient>()

  public constructor(
    private state: DurableObjectState,
    private env: CloudflareEnvironment,
    public readonly id = state.id.toString(),
    private DEBUG = env.ENVIRONMENT === "dev",
  ) {
    setInterval(() => {
      this.clients.forEach((client) => client.checkForTimeout(5000))
    },1000)
  }
  public async fetch(request: Request): Promise<Response> {
    const { headers } = request
    try {
      if (headers.get('Upgrade') === 'websocket') {
        const protocol = headers.get('Sec-WebSocket-Protocol')
        if (protocol === "live") { return this.accept() }
      }
      return this.status(request)
    } catch (e) {
      return debugResponse(headers, e, this.DEBUG)
    }
    // This should be unreachable
    return statusText(501)
  }

  private nextClientId = 0
  private accept(): Response {
    const { response, ws } = websocketUpgrade("live")

    const id = this.nextClientId++;
    const client = new RoomClient(id, ws, this.env, this)
    this.join(client)

    return response
  }

  private status(request: Request) {
    const websockets = [...this.clients.entries()].map(([id]) => id)
    return json({ websockets, id: this.state.id.toString(), this: this, request }, 200, 2)
  }


  private broadcastConnectionCount(skip?: number) {
    const connectionCount = this.clients.size
    
    this.clients.forEach((client, id) => {
      if (id === skip) { return }
      client.sendConnectionCount(connectionCount)
    })
  }

  public join(client: RoomClient): void {
    if (this.clients.has(client.id)) { return; }
    this.clients.set(client.id, client)
    this.broadcastConnectionCount()
  }

  public leave(client: RoomClient): void {
    const id = client.id
    if (!this.clients.has(id)) { return; }
    this.clients.delete(id)
    this.broadcastConnectionCount()
  }
}