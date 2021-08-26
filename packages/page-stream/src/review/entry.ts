import { Replayer } from 'rrweb'


import { ReviewRequest, ReviewResponse } from "../protobuf"

export class ReviewStream {
  private offset = 0

  constructor(
    streamId: string,
    private url = ReviewStream.getWSUrl(streamId),
    private events: any[] = [],
    private replayer = new Replayer(events),
  ) {
    this.connect(url)
  }


  private websocket?: Promise<void>
  private async connect(url: string) {
    if (this.websocket) { return this.websocket }

    return this.websocket = new Promise<void>((resolve, reject) => {
      try {
        const ws = new WebSocket(url, ["review"])
        ws.binaryType = "arraybuffer"

        ws.addEventListener('open', (e) => {
          const request = ReviewRequest.encode({n: this.offset}).finish()
          ws.send(request)
          resolve();
        })
        ws.addEventListener('error', (e) => { this.websocket = undefined; reject(e); console.error(e) })
        ws.addEventListener('close', (e) => { this.websocket = undefined; reject(e); console.error(e) })
        ws.addEventListener('message', ({ data }) => {
          try {
            if (!(data instanceof ArrayBuffer)) { return }

            const message = ReviewResponse.decode(new Uint8Array(data))
            console.info(message)
            const { event, n } = message
            if(typeof n === "number") { this.offset = n }
            if (typeof event === "string") { this.events.push(JSON.parse(event)) }
          } catch (e) {
            console.error(e)
            ws.close(4400, e)
          }
        })
      } catch (e) {
        console.error(e)
        reject(e)
      }
    })
  }

   private static getWSUrl(streamId: string) {
    const url = new URL(location.toString())
    url.protocol = "wss:"
    url.pathname = `/api/activityStream/${streamId}`
    return url.toString()
  }
}