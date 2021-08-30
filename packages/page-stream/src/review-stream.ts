import { Replayer } from 'rrweb'
import { ReviewRequest, ReviewResponse } from "../protocol/protobuf"

export class ReviewStream {
  private offset = 0

  constructor(
    private url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private replayer: Replayer// = new Replayer([], {liveMode: true}),
  ) {
    this.connect(url)
  }

  public async close() {
    if(this._ws && (
        this._ws.readyState === WebSocket.OPEN ||
        this._ws.readyState === WebSocket.CONNECTING)
      ) {
      this._ws.close(4200)
    }
  }


  private _ws?: WebSocket 
  private websocket?: Promise<void>
  private async connect(url: string) {
    if (this.websocket) { return this.websocket }

    return this.websocket = new Promise<void>((resolve, reject) => {
      try {
        const ws = new WebSocket(url, ["review"])
        this._ws = ws
        ws.binaryType = "arraybuffer"

        ws.addEventListener('open', () => {
          const request = ReviewRequest.encode({ n: this.offset }).finish()
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
            if (typeof n === "number") { this.offset = n }
            if (event) {
              for (const s of event) {
                this.replayer.addEvent(JSON.parse(s))
              }
              this.replayer.startLive()
            }
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
}