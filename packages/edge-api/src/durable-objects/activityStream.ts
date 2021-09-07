import { debugResponse } from '../responses/debug';
import { statusText } from '../responses/statusText';
import { websocketUpgrade } from '../responses/websocket';
import {
  IDOMEvent,
  ReportRequest,
  ReportResponse,
  ReviewRequest,
  ReviewResponse,
} from 'kidsloop-page-stream';
import { json } from '../responses/json';
export class ActivityStream implements DurableObject {
  private connectionCount = 0;

  private sessionSecret?: Uint8Array;
  private reporter?: CloudflareWebsocket;
  private reviewers = new Set<CloudflareWebsocket>();
  private checkoutOffset = 0;
  private eventsSinceCheckout: string[] = [];

  public constructor(
    private state: DurableObjectState,
    private env: CloudflareEnvironment,
    private id = state.id,
    private DEBUG = env.ENVIRONMENT === 'dev'
  ) {}

  public async fetch(request: Request): Promise<Response> {
    const { headers } = request;
    try {
      if (headers.get('Upgrade') === 'websocket') {
        const protocol = headers.get('Sec-WebSocket-Protocol');
        return this.websocketUpdate(protocol);
      }
      // const url = new URL(request.url)
      // const paths = url.pathname.split('/')

      return json({ this: this, request }, 200, 2);
      return statusText(404);
    } catch (e) {
      return debugResponse(headers, e, this.DEBUG);
    }
    // This should be unreachable
    return statusText(501);
  }

  private websocketUpdate(protocol?: string | null) {
    const { response, ws } = websocketUpgrade(protocol);

    ws.addEventListener('error', () => ws.close(4500));
    switch (protocol) {
      case 'report':
        ws.addEventListener('close', () => this.reporterClose(ws));
        ws.addEventListener('message', ({ data }) =>
          this.reporterMessage(ws, data)
        );
        ws.accept();
        this.reporterOpen(ws);
        break;
      case 'review':
        ws.addEventListener('close', () => this.reviewerClose(ws));
        ws.addEventListener('message', ({ data }) =>
          this.reviewerMessage(ws, data)
        );
        ws.accept();
        this.reviewerOpen(ws);
        break;
      default:
        throw `Invalid protocol: '${protocol}'`;
    }

    return response;
  }

  private reporterOpen(ws: CloudflareWebsocket) {
    try {
      this.connectionCount++;
      if (!this.sessionSecret) {
        this.reporter = ws;
        this.sessionSecret = crypto.getRandomValues(new Uint8Array(32));
        const message = ReportResponse.encode({
          id: this.state.id.toString(),
          session: this.sessionSecret,
        }).finish();
        ws.send(message);
      }
    } catch (e) {
      ws.close(4500, e.toString());
    }
  }

  private reporterClose(ws: CloudflareWebsocket) {
    this.reviewers.delete(ws);
    this.connectionCount--;
  }

  private reporterMessage(ws: CloudflareWebsocket, data: unknown) {
    try {
      if (!(data instanceof ArrayBuffer)) {
        ws.close(4401, 'Only binary data');
        return;
      }
      const { events, session } = ReportRequest.decode(new Uint8Array(data));

      // Authorize
      if (session.length > 0 && equals(this.sessionSecret, session)) {
        // Only allow reporter connection at a time
        if (this.reporter && this.reporter !== ws) {
          this.reporter.close(4403, 'Session displaced');
        }
        this.reporter = ws;
      }

      //Disconnect unauthorized connections
      if (this.reporter !== ws) {
        ws.close(4403, 'Not authorized');
        return;
      }

      this.broadcast(events);
    } catch (e) {
      ws.close(4500, e.toString());
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private reviewerOpen(ws: CloudflareWebsocket) {
    this.connectionCount++;
  }

  private reviewerClose(ws: CloudflareWebsocket) {
    this.connectionCount--;
    this.reviewers.delete(ws);
  }

  private reviewerMessage(ws: CloudflareWebsocket, data: unknown) {
    try {
      if (!(data instanceof ArrayBuffer)) {
        ws.close(4401, 'Only binary data');
        return;
      }

      const { n } = ReviewRequest.decode(new Uint8Array(data));
      const offset = n - this.checkoutOffset;
      const events =
        offset > 0
          ? this.eventsSinceCheckout.slice(offset)
          : this.eventsSinceCheckout;

      const message = ReviewResponse.encode({
        event: events,
        n: this.checkoutOffset + this.eventsSinceCheckout.length,
      }).finish();

      ws.send(message);

      this.reviewers.add(ws);
    } catch (e) {
      ws.close(4500, e.toString());
    }
  }

  private broadcast(newEvents: IDOMEvent[]) {
    let checkoutOffset: number | undefined;
    let events: string[] = [];

    for (const { event, n, isCheckout } of newEvents) {
      if (typeof n !== 'number') {
        continue;
      }
      if (typeof event !== 'string') {
        continue;
      }
      if (isCheckout) {
        checkoutOffset = n;
        events = [event];
      } else {
        events.push(event);
      }
    }

    if (checkoutOffset !== undefined) {
      this.checkoutOffset = checkoutOffset;
      this.eventsSinceCheckout = events;
    } else {
      this.eventsSinceCheckout.push(...events);
    }

    const message = ReviewResponse.encode({ event: events }).finish();
    for (const reviewer of this.reviewers) {
      reviewer.send(message);
    }
  }
}

function equals(a?: Uint8Array, b?: Uint8Array) {
  if (!a || !b) {
    return false;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
