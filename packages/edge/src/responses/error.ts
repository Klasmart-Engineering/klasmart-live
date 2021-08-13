import { json } from "./json";
import { statusText } from "./statusText";
import { websocketUpgrade } from "./websocket";

/**
 * Chrome does not show the response from Websocket connection errors
 * This function creates and accepts a websocket to provide the error as the close reason
 * @param requestHeaders 
 * @param error 
 * @param DEBUG 
 * @returns 
 */
export function error(requestHeaders: Headers, error?: unknown, DEBUG?: boolean): Response {
  if (!DEBUG) { return statusText(500) }

  if (requestHeaders.get('Upgrade') === 'websocket') {
    const protocol = requestHeaders.get('Sec-WebSocket-Protocol')
    const { ws, response } = websocketUpgrade(protocol)

    ws.accept();

    const reason = `Exception during websocket setup: ${JSON.stringify({ error })}`
    ws.close(1011, reason);

    return response
  } else {
    return json(error, 501, 2)
  }
}
