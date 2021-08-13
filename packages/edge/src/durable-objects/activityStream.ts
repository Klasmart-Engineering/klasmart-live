import { error } from "../responses/error"
import { statusText } from "../responses/statusText"
import { websocketUpgrade } from "../responses/websocket"

export class ActivityStream implements DurableObject {
  public constructor(
    private state: DurableObjectState,
    private env: CloudflareEnvironment,
    private websockets = new Set<WebSocket>(),
    private DEBUG = env.ENVIRONMENT === "dev",
  ) { }

  private open(ws: WebSocket) {
    this.websockets.add(ws)
  }

  private close(ws: WebSocket) {
    this.websockets.delete(ws)
  }

  private message(ws: WebSocket, data: any) {
    // echo
    ws.send(data)
  }

  public async fetch(request: Request): Promise<Response> {
    const { headers } = request
    try {
      if (headers.get('Upgrade') !== 'websocket') { return statusText(400) }

      const protocols = headers.get('Sec-WebSocket-Protocol')

      const { response, ws } = websocketUpgrade(protocols)
      this.accept(ws)

      return response
    } catch (e) {
      return error(headers, e, this.DEBUG)
    }
    // This should be unreachable
    return statusText(501)
  }

  private accept(ws: WebSocket): void {
    ws.addEventListener('message', (e) => this.message(ws, e.data))
    ws.addEventListener('open', () => this.open(ws))
    ws.addEventListener('close', () => this.close(ws))
    ws.addEventListener('error', (e) => {
      let errorString = "Unknown Error"
      try {
        if (this.DEBUG) { errorString = (e as any).toString() }
      } finally {
        ws.close(4500, errorString)
      }
    })

    ws.accept()

    ws.close(4501, "Not implemented")
  }

}
