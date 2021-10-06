import { combineReducers, createAction, createReducer, Dispatch } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';
import { nanoid } from 'nanoid';
import { Action, ClassAction, State } from '.';
import { ValueOf } from '../types';
import { Command, CommandAcknowledgement, ICommand } from '../protobuf';


interface NetworkPromise {
    resolve:() => unknown,
    reject: (reason?: string) => unknown
}
export class Network {
    private pendingRequests = new Map<string,NetworkPromise>()

    constructor (
        /* eslint-disable no-unused-vars */
        public readonly dispatch: Dispatch<Action>,
        public readonly selector: (s: DefaultRootState) => State,
        private ws?: Promise<WebSocket>,
        /* eslint-enable no-unused-vars */
    ) {}

    // eslint-disable-next-line @typescript-eslint/member-ordering
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
                this.sendHeartbeat(ws);
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

    private async send(command: ICommand): Promise<void> {
        if (!this.ws) {
            throw Error('websocket has not been initialised');
        }
        const id = nanoid();
        const bytes = Command.encode({id, ...command}).finish();
        (await this.ws).send(bytes);
        return new Promise<void>((resolve, reject) => this.pendingRequests.set(id, {resolve, reject}));
    }

    private onNetworkMessage(ws: WebSocket, data: unknown) {
        if (!(data instanceof ArrayBuffer)) {
            ws.close(4401, 'Binary only protocol');
            return;
        }
        try {
            const {id, code, error } = CommandAcknowledgement.decode(new Uint8Array(data));
            const pendingPromise = this.pendingRequests.get(id);
            if(!pendingPromise) { console.error(`Recieved aknowledge(${id}) for unknown request`); return; }
            this.pendingRequests.delete(id);
            if(error) {
                pendingPromise.reject(error);
            } else {
                pendingPromise.resolve();
            }
        } catch (e) {
            ws.close(4400, 'Parse error');
        }
    }

    private sendHeartbeat(ws: WebSocket, milliseconds = 1000) {
        if(ws.readyState !== WebSocket.OPEN) { return; }
        const message = new Uint8Array(0); //Heartbeat.encode({}).finish()
        ws.send(message);
        setTimeout(() => this.sendHeartbeat(ws, milliseconds), milliseconds);
    }
}

/* eslint-disable no-unused-vars */
export enum ConnectionStatus {
    Connecting,
    Connected,
    Disconnected,
}
/* eslint-enable no-unused-vars */

export const setConnectionError = createAction<boolean>('setConnectionError');
export const connectionError = createReducer<boolean>(
    false, (builder) => builder.addCase(setConnectionError, (_, {payload}) => payload)
);

export const setConnectionStatus = createAction<ConnectionStatus>('setConnectionState');
export const connectionStatus = createReducer<ConnectionStatus>(
    ConnectionStatus.Disconnected,
    (builder) => builder.addCase(setConnectionStatus, (_, {payload}) => payload)
);

export const networkReducer = combineReducers({
    connectionStatus,
    connectionError,
});

const networkActions = {
    setConnectionError,
    setConnectionState: setConnectionStatus
};

export type NetworkAction = ReturnType<ValueOf<typeof networkActions>>