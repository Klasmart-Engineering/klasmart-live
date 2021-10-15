import { Dispatch } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';
import { nanoid } from 'nanoid';
import { Action, State } from '.';
import { NewType } from './types';
import { ClassRequest, IClassRequest, ClassMessage, IClassResponse } from './protobuf';
import { messageToClassAction } from './protobuf/actions';
import { EventEmitter } from 'eventemitter3';
import { ConnectionStatus, setConnectionError, setConnectionStatus } from './redux/network';

export type RequestID = NewType<string, 'RequestID'>
export const newRequestId = (value: string): RequestID => value as RequestID;

interface NetworkPromise {
    resolve:() => unknown,
    reject: (reason?: string) => unknown
}
export class Network {
    private emitter = new EventEmitter();
    // Maintains a map of promises to be resolved/rejected on receipt of a future network message
    private pendingRequests = new Map<RequestID, NetworkPromise>()
    //Stores the return value of setTimeout for next keepalive messages
    private keepAliveTimeout?: number

    constructor (
        /* eslint-disable no-unused-vars */
        public readonly dispatch: Dispatch<Action>,
        public readonly selector: (s: DefaultRootState) => State,
        private ws?: Promise<WebSocket>,
        /* eslint-enable no-unused-vars */
    ) {}

    public async initWs (url: string): Promise<WebSocket> {
        if(this.ws) { return this.ws; }
        this.ws = new Promise<WebSocket>((resolve, reject) => {
            this.dispatch(setConnectionStatus(ConnectionStatus.Connecting));

            const ws = new WebSocket(url, [ 'live' ]);
            ws.binaryType = 'arraybuffer';
            ws.addEventListener('open', (e) => {
                resolve(ws);
                this.dispatch(setConnectionError(false));
                this.dispatch(setConnectionStatus(ConnectionStatus.Connected));
                this.resetKeepAliveTimeout(ws);
            });
            ws.addEventListener('close', (e) => {
                this.ws = undefined;
                reject(e);
                this.dispatch(setConnectionStatus(ConnectionStatus.Disconnected));
            });
            ws.addEventListener('error', (e) => {
                reject(e);
                this.dispatch(setConnectionError(true));
            });
            ws.addEventListener('message', ({ data }) => this.onNetworkMessage(ws, data));
        });
        return this.ws;
    }

    public async close(reason?: string): Promise<void> {
        (await this.ws)?.close(200, reason);
    }

    public async send(command: IClassRequest): Promise<void> {
        if (!this.ws) {
            throw Error('websocket has not been initialised');
        }
        const requestId = nanoid() as RequestID;
        const bytes = ClassRequest.encode({requestId, ...command}).finish();
        const ws = await this.ws;
        ws.send(bytes);
        this.resetKeepAliveTimeout(ws);
        return new Promise<void>((resolve, reject) => this.pendingRequests.set(requestId, {resolve, reject}));
    }

    private onNetworkMessage(ws: WebSocket, data: unknown) {
        if (!(data instanceof ArrayBuffer)) {
            ws.close(4401, 'Binary only protocol');
            return;
        }
        try {
            const message = ClassMessage.decode(new Uint8Array(data));

            if(message.response) { this.handleRequestPromise(message.response); }
            const action = messageToClassAction(message);
            if(!action) { return; }
            this.dispatch(action);
            this.emitter.emit(message.event || 'unknownAction', action);
        } catch (e) {
            ws.close(4400, 'Parse error');
        }
    }
    private handleRequestPromise(event:IClassResponse) {
        if(!event.id) { console.error('Recieved ClassResponse without an id'); return; }
        const id = newRequestId(event.id);
        
        const pendingPromise = this.pendingRequests.get(id);
        if(!pendingPromise) {
            console.error(`Recieved aknowledge(${id}) for unknown request`);
            return;
        }

        this.pendingRequests.delete(id);
        if(event.error) {
            pendingPromise.reject(event.error);
        } else {
            pendingPromise.resolve();
        }
    }

    private resetKeepAliveTimeout(ws: WebSocket, milliseconds = 1000)  {
        if(this.keepAliveTimeout) { clearTimeout(this.keepAliveTimeout); }
        this.keepAliveTimeout = setTimeout(() => this.sendKeepAlive(ws, milliseconds), milliseconds);
    }

    private sendKeepAlive(ws: WebSocket, milliseconds?: number) {
        if(ws.readyState !== WebSocket.OPEN) { return; }
        const message = new Uint8Array(0); //Heartbeat.encode({}).finish()
        ws.send(message);
        this.resetKeepAliveTimeout(ws, milliseconds);
    }
}