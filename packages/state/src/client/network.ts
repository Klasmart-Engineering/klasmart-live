import { combineReducers } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit/dist/createAction';
import { createReducer } from '@reduxjs/toolkit/dist/createReducer';
import { Dispatch } from 'react';
import { DefaultRootState } from 'react-redux';
import { State } from '.';



export class Network {
    constructor (
        /* eslint-disable no-unused-vars */
        public readonly dispatch: Dispatch<NetworkActions>,
        public readonly selector: (s: DefaultRootState) => State,
        private ws?: Promise<WebSocket>,
        /* eslint-enable no-unused-vars */
    ) {}

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public async initWs (url: string): Promise<WebSocket> {
        if(this.ws) { return this.ws; }
        this.ws = new Promise<WebSocket>((resolve, reject) => {
            const ws = new WebSocket(url, [ 'live' ]);
            ws.binaryType = 'arraybuffer';
            ws.addEventListener('open', (e) => {
                resolve(ws);
                this.dispatch(setConnectionState(true));
                this.sendHeartbeat(ws);
            });
            ws.addEventListener('close', (e) => {
                this.ws = undefined;
                reject(e);
                this.dispatch(setConnectionState(false));
            });
            ws.addEventListener('error', (e) => reject(e));
            ws.addEventListener('message', ({ data }) => this.networkMessage(ws, data));
        });
        return this.ws;
    }

    private networkMessage(ws: WebSocket, data: unknown) {
        if (!(data instanceof ArrayBuffer)) {
            ws.close(4401, 'Binary only protocol');
            return;
        }
        try {
            //...
            console.log(data);
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

export const setConnectionState = createAction<boolean>('setConnectionState');
export const connectionState = createReducer<boolean>(
    false,
    (builder) =>
        builder.addCase(setConnectionState, (state, {payload}) => payload)
);
export type NetworkActions = ReturnType<typeof setConnectionState>

export const networkReducer = combineReducers({
    connectionState,
});
