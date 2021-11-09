import { Dispatch } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';
import { nanoid } from 'nanoid';
import { Action, State } from './ui';
import { NewType } from './types';
import { ClassRequest, IClassRequest, ClassMessage, IClassResponse } from './protobuf';
import { messageToClassAction } from './protobuf/actions';
import { EventEmitter } from 'eventemitter3';
import { ConnectionStatus, setConnectionError, setConnectionStatus } from './redux/network';

export type RequestID = NewType<string, 'RequestID'>
export const newRequestId = (value: string): RequestID => value as RequestID;

interface NetworkPromise {
    resolve: () => unknown,
    reject: (reason?: string) => unknown
}
export class Network {
    private actionEmitter = new EventEmitter();
    // Maintains a map of promises to be resolved/rejected on receipt of a future network message
    private pendingRequests = new Map<RequestID, NetworkPromise>()

    private recieveTimeoutReference?: number
    private recieveMessageTimeoutTime = 5000

    private keepAliveTimeoutReference?: number
    private sendKeepAliveMessageInterval = 1000

    constructor(
        /* eslint-disable no-unused-vars */
        public readonly dispatch: Dispatch<Action>,
        public readonly selector: (s: unknown) => State,
        private ws?: Promise<WebSocket>,
        /* eslint-enable no-unused-vars */
    ) { }

    public onAction<T extends ClassActionType = ClassActionType>(actionType: T, f: (payload: ClassActionTypeToPayload[T]) => unknown) {
        this.actionEmitter.addListener(actionType, f)
        return () => {
          this.actionEmitter.removeListener(actionType, f)
        }
    }

    public async initWs(url: string): Promise<WebSocket> {
        if (this.ws) { return this.ws; }
        this.ws = new Promise<WebSocket>((resolve, reject) => {
            this.dispatch(setConnectionStatus(ConnectionStatus.Connecting));

            const ws = new WebSocket(url, ['live']);
            ws.binaryType = 'arraybuffer';
            ws.addEventListener('open', (e) => {
                console.log('open', e);
                resolve(ws);
                this.dispatch(setConnectionError(false));
                this.dispatch(setConnectionStatus(ConnectionStatus.Connected));
                this.resetNetworkSendTimeout();
                this.resetNetworkRecieveTimeout();
            });
            ws.addEventListener('close', (e) => {
                console.log('close', e);
                this.ws = undefined;
                reject(e);
                this.dispatch(setConnectionStatus(ConnectionStatus.Disconnected));
            });
            ws.addEventListener('error', (e) => {
                console.log('error', e);
                reject(e);
                this.dispatch(setConnectionError(true));
            });
            ws.addEventListener('message', (e) => {
                console.log('message', e);
                this.onNetworkMessage(ws, e.data);
            });
        });
        return this.ws;
    }

    public async close(code: number | undefined = 4500, reason?: string): Promise<void> {
        (await this.ws)?.close(code, reason);
    }

    public async send(command: IClassRequest): Promise<void> {
        if (!this.ws) {
            throw Error('websocket has not been initialised');
        }
        const requestId = nanoid() as RequestID;
        const bytes = ClassRequest.encode({ requestId, ...command }).finish();
        const sent = await this._send(bytes);
        if (!sent) { throw new Error('Failed to send'); }
        return new Promise<void>((resolve, reject) => this.pendingRequests.set(requestId, { resolve, reject }));
    }

    private async _send(bytes: ArrayBuffer) {
        const ws = await this.ws;
        if (!ws) { return false; }
        ws.send(bytes);
        this.resetNetworkSendTimeout();
        return true;
    }

    private onNetworkMessage(ws: WebSocket, data: unknown) {
        this.resetNetworkRecieveTimeout();
        if (!(data instanceof ArrayBuffer)) {
            ws.close(4401, 'Binary only protocol');
            return;
        }
        try {
            if (data.byteLength <= 0) { return; }
            const message = ClassMessage.decode(new Uint8Array(data));

            if (message.response) { this.handleRequestPromise(message.response); }
            const action = messageToClassAction(message);
            if (!action) { return; }
            this.dispatch(action);
            this.actionEmitter.emit(action.type, action.payload);
        } catch (e) {
            console.error(e)
            ws.close(4400, 'Parse error');
        }
    }

    private handleRequestPromise(event: IClassResponse) {
        if (!event.id) { console.error('Recieved ClassResponse without an id'); return; }
        const id = newRequestId(event.id);

        const pendingPromise = this.pendingRequests.get(id);
        if (!pendingPromise) {
            console.error(`Recieved aknowledge(${id}) for unknown request`);
            return;
        }

        this.pendingRequests.delete(id);
        if (event.error) {
            pendingPromise.reject(event.error);
        } else {
            pendingPromise.resolve();
        }
    }

    private resetNetworkRecieveTimeout(): void {
        // Enable this when the client implments sending keep alive messages 
        if (this.recieveTimeoutReference !== undefined) { clearTimeout(this.recieveTimeoutReference); }
        this.recieveTimeoutReference = setTimeout(() => this.close(4400, 'timeout'), this.recieveMessageTimeoutTime);
    }

    private resetNetworkSendTimeout(): void {
        if (this.keepAliveTimeoutReference) { clearTimeout(this.keepAliveTimeoutReference); }
        this.keepAliveTimeoutReference = setTimeout(() => this._send(new Uint8Array(0)), this.sendKeepAliveMessageInterval);
    }

}