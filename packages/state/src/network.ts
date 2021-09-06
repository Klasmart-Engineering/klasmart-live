import { Action } from "@reduxjs/toolkit";
import { setConnected, setRoomId, setEndTimestamp, setHostId, setContent, updateUser, User, content, addChatMessage, updateDevice, ActivityStream } from "./redux";
import { Network } from "kidsloop-live-serialization"
import { IActivityStream, IDeviceAction, IRoomAction, IUserAction } from "../../serialization/dist/protobuf/network";
const { ClientMessage, ServerMessage } = Network

export class Transport {
    constructor(
        private dispatch: (action: Action) => unknown,
    ) { }

    public async connect(url: string): Promise<boolean> {
        const ws = await this.websocket(url)
        return ws ? true : false
    }


    private _ws?: WebSocket
    private _websocketPromise?: Promise<WebSocket | undefined>;
    private async websocket(url?: string) {
        if (this._ws) { return this._ws }
        if (this._websocketPromise) { return this._websocketPromise; }
        this._websocketPromise = new Promise<WebSocket | undefined>((resolve, reject) => {
            try {
                if (!url) { resolve(undefined); return }
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
        if (!this._ws || this._ws.readyState !== WebSocket.OPEN) { return }
        const message = ClientMessage.encode({}).finish()
        this._ws.send(message)
        setTimeout(() => this.sendHeartbeat(milliseconds), milliseconds)
    }

    private message(ws: WebSocket, data: unknown) {
        if (!(data instanceof ArrayBuffer)) { ws.close(4401, "Binary only protocol"); return }
        try {
            const { roomId, roomAction, userActions, deviceActions } = ServerMessage.decode(new Uint8Array(data))
            if (roomId) { this.dispatch(setRoomId(roomId)) }
            if (roomAction) { this.roomAction(roomAction) }
            for (const [id, userAction] of Object.entries(userActions)) {
                this.userAction(id, userAction)
            }
            for (const [id, deviceAction] of Object.entries(deviceActions)) {
                this.deviceAction(id, deviceAction)
            }

        } catch (e) {
            ws.close(4400, "Parse error")
        }
    }

    private roomAction({ content, hostId, endTimestamp }: IRoomAction) {
        if (endTimestamp) { this.dispatch(setEndTimestamp(endTimestamp)) }
        if (hostId) { this.dispatch(setHostId(hostId)) }
        if (content) {
            const { type } = content
            if (type) {
                const locator = content.locator || undefined
                this.dispatch(setContent({ type, locator }))
            }
        }
    }

    private userAction(idString: string, userAction: IUserAction) {
        const id = parseInt(idString)
        const { name, chatMessages } = userAction
        if (name) {
            const teacher = !!userAction.teacher
            const update = { name, teacher }
            this.dispatch(updateUser({ id, update }))
        }
        if (chatMessages) {
            for (const { text, timestamp } of chatMessages) {
                if (!text || !timestamp) { continue }
                this.dispatch(addChatMessage({ userId: id, text, timestamp }))
            }
        }
    }

    private deviceAction(idString: string, deviceAction: IDeviceAction) {
        const id = parseInt(idString)
        const userId = deviceAction.userId || undefined
        const activityStream = this.activityStream(deviceAction.activityStream)
        if (userId || activityStream) {
            const update = { userId, activityStream }
            this.dispatch(updateDevice({ id, update }))
        }
    }

    //Note: This doesn't need to be in <b>this</b> class
    private activityStream(deviceAction?: IActivityStream | null) {
        if (!deviceAction) { return }
        const { activityId, streamId } = deviceAction
        if (!activityId || !streamId) { return }
        return { activityId, streamId }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private openEvent(ws: WebSocket) {
        this.dispatch(setConnected(true))
        this.sendHeartbeat(1000)
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private closeEvent(ws: WebSocket, e: CloseEvent) {
        this.dispatch(setConnected(false));
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private networkError(ws: WebSocket, e: unknown) {
        console.error(e)
    }
}