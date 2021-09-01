export function websocketUpgrade(protocol?: string | null): {
    ws: CloudflareWebsocket,
    response: Response
} {
    const webSocketPair = new WebSocketPair()

    const headers = typeof protocol === "string"
        ? { 'Sec-WebSocket-Protocol': protocol }
        : undefined

    return {
        ws: webSocketPair[1],
        response: new Response(
            null,
            {
                status: 101,
                webSocket: webSocketPair[0],
                headers,
            },
        ),
    }
}