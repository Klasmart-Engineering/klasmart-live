import { Action } from "@reduxjs/toolkit";
import { Heartbeat, RoomState } from "kidsloop-live-serialization"
import { setConnectionCount, setConnectionState, setRoomId } from "./networkActions";
export class Transport {
    constructor(
        private dispatch: (action: Action) => unknown,
    ) { }
        
    public async connect(url: string): Promise<boolean> {
        const ws = await this.websocket(url)
        return ws ? true : false
    }


    private _ws?: WebSocket
    private _websocketPromise?: Promise<WebSocket|undefined>;
    private async websocket(url?: string) {
        if (this._ws) {return this._ws}
        if (this._websocketPromise) { return this._websocketPromise; }
        this._websocketPromise = new Promise<WebSocket|undefined>((resolve, reject) => {
            try {
                if(!url) { resolve(undefined); return }
                const ws = new WebSocket(url, ["live"]);
                ws.binaryType = "arraybuffer";
                ws.addEventListener('open', () => { this._ws = ws; resolve(ws); this.openEvent(ws) })
                ws.addEventListener('close', (e) => { reject(e); this.closeEvent(ws, e) })
                ws.addEventListener('error', (e) => { reject(e); this.networkError(ws, e) })
                ws.addEventListener('message', ({ data }) => this.message(ws, data))
            } catch (e) {
                reject(e);
                console.error(e);
            }
        })

        this._websocketPromise.finally(() => this._websocketPromise = undefined)

        return this._websocketPromise
    }

    private sendHeartbeat(milliseconds: number = 1000) {
        if(!this._ws || this._ws.readyState !== WebSocket.OPEN) { return }
        const message = Heartbeat.encode({}).finish()
        this._ws.send(message)
        setTimeout(() => this.sendHeartbeat(milliseconds), milliseconds)
    }

    private message(ws: WebSocket, data: unknown) {
        if (!(data instanceof ArrayBuffer)) { ws.close(4401, "Binary only protocol"); return }
        try {
            const { connectionCount, roomId } = RoomState.decode(new Uint8Array(data))
            if (connectionCount) { this.dispatch(setConnectionCount(connectionCount)) }
            if (roomId) { this.dispatch(setRoomId(roomId)) }
        } catch (e) {
            ws.close(4400, "Parse error")
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private openEvent(ws: WebSocket) {
        this.dispatch(setConnectionState(true))
        this.sendHeartbeat(1000)
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