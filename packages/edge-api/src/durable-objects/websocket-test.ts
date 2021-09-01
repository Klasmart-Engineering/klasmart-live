export class WebsocketTest implements DurableObject {
  public constructor(
    private state: DurableObjectState,
    private env: CloudflareEnvironment,
  ) {}

  private closeCount = 0
  private messageCount = 0
  private errorCount = 0
  private acceptCount = 0

  public async fetch(request: Request): Promise<Response> {
    if (request.headers.get('Upgrade') !== 'websocket') { return this.info() }

    return this.websocket(request)
  }

  public info(): Response {
    const info = {
      closeCount: this.closeCount,
      messageCount: this.messageCount,
      errorCount: this.errorCount,
      acceptCount: this.acceptCount,
    }

    return new Response(
      JSON.stringify(info, undefined, 2),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }

  public websocket(request: Request): Response {
    const protocol = request.headers.get('Sec-WebSocket-Protocol')

    const webSocketPair = new WebSocketPair()
    const headers = typeof protocol === "string" ? { 'Sec-WebSocket-Protocol': protocol } : undefined

    const ws = webSocketPair[1]
    ws.addEventListener('close', () => this.closeCount++)
    ws.addEventListener('message', () => this.messageCount++)
    ws.addEventListener('error', () => this.errorCount++)
    ws.accept()
    this.acceptCount++

    const id = this.state.id.toString()
    const message = JSON.stringify({
      id,
      closeCount: this.closeCount,
      messageCount: this.messageCount,
      errorCount: this.errorCount,
      acceptCount: this.acceptCount,
      state: [...Object.entries(this.state)]
    })
    ws.send(message)

    return new Response(
      null,
      {
        status: 101,
        webSocket: webSocketPair[0],
        headers,
      },
    )
  }


}
