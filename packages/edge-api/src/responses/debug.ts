import { json } from './json';
import { statusText } from './statusText';
import { websocketUpgrade } from './websocket';

/**
 * Chrome does not show the response from Websocket connection errors
 * This function creates and accepts a websocket to provide the error as the close reason
 * @param requestHeaders
 * @param error
 * @param DEBUG
 * @returns
 */
export function debugResponse(
  requestHeaders: Headers,
  error?: unknown,
  DEBUG?: boolean
): Response {
  if (!DEBUG) {
    return statusText(500);
  }

  let errorString = 'Unknown Error';
  // eslint-disable-next-line no-empty
  try {
    errorString = `${error}`;
  } catch (e) {}
  const errorObject = { errorString, error };

  if (requestHeaders.get('Upgrade') === 'websocket') {
    const protocol = requestHeaders.get('Sec-WebSocket-Protocol');
    const { ws, response } = websocketUpgrade(protocol);
    ws.accept();
    ws.close(1011, JSON.stringify(response));
    return response;
  } else {
    return json(errorObject, 501, 2);
  }
}
