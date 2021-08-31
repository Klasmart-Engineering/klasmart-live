import { RoomState } from "kidsloop-live-serialization"

export class Transport {
    constructor() {}

    private websocket?: Promise<WebSocket>;
    private async connect(url: string) {
        if (this.websocket) { return this.websocket; }
        return this.websocket = new Promise<WebSocket>((resolve, reject) => {
            try {
                const ws = new WebSocket(url, ["room"]);
                ws.binaryType = "arraybuffer";
                ws.addEventListener('open', () => { resolve(ws); })
                ws.addEventListener('error', (e) => { this.websocket = undefined; reject(e); console.error(e) })
                ws.addEventListener('close', (e) => { this.websocket = undefined; console.error(e) })
                ws.addEventListener('message', ({ data }) => this.message(data))
            } catch(e) {
                this.websocket = undefined;
                console.error(e);
                reject(e);
            }
        })
    }

    private message(data: unknown) {
        if(!(data instanceof ArrayBuffer)) { return }
        const roomstate = RoomState.decode(new Uint8Array(data))

    }
}