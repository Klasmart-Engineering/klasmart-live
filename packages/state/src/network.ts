import { Heartbeat, RoomState } from "kidsloop-live-serialization"
import { setConnectionCount, setConnectionState, setRoomId } from "./networkActions";
import { Dispatch } from "./redux";

export class Transport {
    constructor(
        private url: string,
        private dispatch: Dispatch,
    ) {
        this.connect()
    }

    private websocket?: Promise<WebSocket>;
    private async connect() {
        if (this.websocket) { return this.websocket; }
        return this.websocket = new Promise<WebSocket>((resolve, reject) => {
            try {
                const ws = new WebSocket(this.url, ["live"]);
                ws.binaryType = "arraybuffer";
                ws.addEventListener('open', () => { resolve(ws); this.openEvent(ws) })
                ws.addEventListener('error', (e) => { this.websocket = undefined; reject(e); this.networkError(ws, e) })
                ws.addEventListener('close', (e) => { this.websocket = undefined; reject(e); this.closeEvent(ws, e) })
                ws.addEventListener('message', ({ data }) => this.message(ws, data))
            } catch(e) {
                this.websocket = undefined;
                reject(e);
                console.error(e);
            }
        })
    }

    private async send(ws: WebSocket, data: unknown) {
        if(!(data instanceof ArrayBuffer)) { ws.close(4401, "Binary only protocol"); return }
        ws.send(data);
    }

    private message(ws: WebSocket, data: unknown) {
        if(!(data instanceof ArrayBuffer)) { ws.close(4401, "Binary only protocol"); return }
        try {
            const { connectionCount, roomId } = RoomState.decode(new Uint8Array(data))
            if(connectionCount) { this.dispatch(setConnectionCount(connectionCount)) }
            if(roomId) { this.dispatch(setRoomId(roomId)) }
        } catch(e) {
            ws.close(4400, "Parse error")
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private openEvent(ws: WebSocket) {
        this.dispatch(setConnectionState(true))
        setInterval(() => {
            this.send(ws, Heartbeat.create())
        }, 1000);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private closeEvent(ws: WebSocket, e: CloseEvent) {
        this.dispatch(setConnectionState(false)); 
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private networkError(ws: WebSocket, e: unknown) {
        console.error(e)
    }
}