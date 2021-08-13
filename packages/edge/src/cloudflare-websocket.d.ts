export { }

declare global {
  interface WebSocket {
    accept(): unknown;
    addEventListener(event: 'close', callbackFunction: (code?: number, reason?: string) => unknown): unknown;
    addEventListener(event: 'error', callbackFunction: (e: unknown) => unknown): unknown;
    addEventListener(event: 'message', callbackFunction: (event: { data: any }) => unknown): unknown;
    
    /**
     * @param code https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
     * @param reason
     */
    close(code?: number, reason?: string): unknown;
    send(message: string): unknown;
  }

  class WebSocketPair {
    0: WebSocket; // Client
    1: WebSocket; // Server
  }

  interface ResponseInit {
    webSocket?: WebSocket;
  }
}
