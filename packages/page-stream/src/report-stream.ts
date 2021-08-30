import { record } from "rrweb"
import { IDOMEvent, ReportResponse, ReportRequest } from "../protocol/protobuf"

export class ReportStream {
  private events: IDOMEvent[] = []
  private eventCount = 0
  
  constructor(
    private streamId?: string,
    private session?: Uint8Array,
  ) {
    record({
      emit: (e, c) => this.event(e, c)
    })
  }

  private websocket?: Promise<() => void>
  private async getSender() {
    if (this.websocket) { return this.websocket }

    return this.websocket = new Promise<() => void>((resolve, reject) => {
      try {
        let sendIndex = 0
        const ws = new WebSocket(this.getWSUrl(), ["report"])
        ws.binaryType = "arraybuffer"

        const sender = () => {
          const events = this.events.slice(sendIndex)
          if (events.length === 0) { return }
          const data = ReportRequest.encode({ events }).finish()
          ws.send(data)
          sendIndex += events.length
        }

        ws.addEventListener('open', () => { resolve(sender) })
        ws.addEventListener('error', (e) => { this.websocket = undefined; reject(e); console.error(e) })
        ws.addEventListener('close', (e) => { this.websocket = undefined; reject(e); console.error(e) })
        ws.addEventListener('message', ({ data }) => {
          try {
            if (!(data instanceof ArrayBuffer)) { return }

            const message = ReportResponse.decode(new Uint8Array(data))
            console.info(message)
            const { acknowledge, session, id } = message
            if (typeof id === "string") {
              this.streamId = id
              window.postMessage(id, "*")
            }
            
            if (session && session.length > 0) { this.session = session }

            if (typeof acknowledge === "number") {
              // Remove events that have been acknowledged
              while (this.events.length > 0) {
                const peek = this.events[0]
                if (typeof peek.n !== "number" || peek.n >= acknowledge) { break }
                this.events.shift()
                sendIndex--
              }
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

  private sendPromise?: Promise<void>
  private async send() {
    if (this.sendPromise) { return this.sendPromise }
    // eslint-disable-next-line no-async-promise-executor
    return this.sendPromise = new Promise<void>(async (resolve) => {
      try {
        const sender = await this.getSender()
        sender()
      } catch (e) {
        console.error(e)
      } finally {
        resolve()
        this.sendPromise = undefined
      }
    })
  }

  private event(eventObject: Record<string, unknown>, isCheckout?: boolean): void {
    this.events.push({
      event: JSON.stringify(eventObject),
      isCheckout,
      n: this.eventCount++,
    })
    this.send()
  }

  private getWSUrl() {
    const url = new URL(location.toString())
    url.protocol = "wss:"
    url.pathname = "/api/activityStream"
    if (this.streamId) { url.pathname = `${url.pathname}/${this.streamId}` }
    return url.toString()
  }
}