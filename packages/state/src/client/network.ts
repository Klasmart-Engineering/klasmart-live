import { combineReducers, createAction, createReducer, Dispatch } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';
import { nanoid } from 'nanoid';
import { Action, State } from '.';
import { NewType, ValueOf } from '../types';
import { ClassRequest, ClassEvent, IClassRequest, IClassResponseEvent, IActivityStreamIdChangedEvent, ITrophyRewardedToUserEvent, ITrophyRewardedToAllEvent, ISetClassStateEvent, INewChatMessageEvent, IHostChangedEvent, IDeviceDisconnectedEvent, IDeviceConnectedEvent, IContentChangedEvent, IClassEndedEvent } from '../protobuf';
import { actvityStreamIdChangedAction, classEndedAction, contentChangedAction, deviceConnectedAction, deviceDisconnectedAction, hostChangedAction, newChatMessageAction, setRoomStateAction, trophyRewardedToAllAction, trophyRewardedToUserAction } from '../protobuf/actions';
import { EventEmitter } from 'eventemitter3';

type RequestID = NewType<string, 'RequestID'>
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

    private async send(command: IClassRequest): Promise<void> {
        if (!this.ws) {
            throw Error('websocket has not been initialised');
        }
        const id = nanoid() as RequestID;
        const bytes = ClassRequest.encode({id, ...command}).finish();
        const ws = await this.ws;
        ws.send(bytes);
        this.resetKeepAliveTimeout(ws);
        return new Promise<void>((resolve, reject) => this.pendingRequests.set(id, {resolve, reject}));
    }

    private onNetworkMessage(ws: WebSocket, data: unknown) {
        if (!(data instanceof ArrayBuffer)) {
            ws.close(4401, 'Binary only protocol');
            return;
        }
        try {
            const event = ClassEvent.decode(new Uint8Array(data));
            if(event.actionResponse) { this.actionResponse(event.actionResponse); }
            if(event.actvityStreamIdChanged) {
                this.dispatchEvent('actvityStreamIdChanged', actvityStreamIdChangedAction(event.actvityStreamIdChanged));
            }
            if(event.classEnded) {
                this.dispatchEvent('classEnded', classEndedAction(event.classEnded));
            }
            if(event.contentChanged) {
                this.dispatchEvent('contentChanged', contentChangedAction(event.contentChanged));
            }
            if(event.deviceConnected) {
                this.dispatchEvent('deviceConnected', deviceConnectedAction(event.deviceConnected));
            }
            if(event.deviceDisconnected) {
                this.dispatchEvent('deviceDisconnected', deviceDisconnectedAction(event.deviceDisconnected));
            }
            if(event.hostChanged) {
                this.dispatchEvent('hostChanged', hostChangedAction(event.hostChanged));
            }
            if(event.newChatMessage) {
                this.dispatchEvent('newChatMessage', newChatMessageAction(event.newChatMessage));
            }
            if(event.setRoomState) {
                this.dispatchEvent('setRoomState', setRoomStateAction(event.setRoomState));
            }
            if(event.trophyRewardedToAll) {
                this.dispatchEvent('trophyRewardedToAll', trophyRewardedToAllAction(event.trophyRewardedToAll));
            }
            if(event.trophyRewardedToUser) {
                this.dispatchEvent('trophyRewardedToUser', trophyRewardedToUserAction(event.trophyRewardedToUser));
            }
        } catch (e) {
            ws.close(4400, 'Parse error');
        }
    }

    private dispatchEvent(key: string, action?: Action) {
        if(!action) { return; }
        this.emitter.emit('actvityStreamIdChanged', action);
        this.dispatch(action);
    }

    private actionResponse(event: IClassResponseEvent) {
        if(!event.id) { return; }

        const id = event.id as RequestID;
        const pendingPromise = this.pendingRequests.get(id);
        if(!pendingPromise) { console.error(`Recieved aknowledge(${id}) for unknown request`); return; }
        
        this.pendingRequests.delete(id);
        if(event.error) {
            pendingPromise.reject(event.error);
        } else {
            pendingPromise.resolve();
        }
    }

    private actvityStreamIdChanged(event: IActivityStreamIdChangedEvent) {
        const action = actvityStreamIdChangedAction(event);
        if(!action) { return; }
        this.emitter.emit('actvityStreamIdChanged', action);
        this.dispatch(action);
    }
    private classEnded(event: IClassEndedEvent) {
        const action = classEndedAction(event);
        if(!action) { return; }
        this.dispatch(action);
    }
    private contentChanged(event: IContentChangedEvent) {
        const action = contentChangedAction(event);
        if(!action) { return; }
        this.dispatch(action);
    }
    private deviceConnected(event: IDeviceConnectedEvent) {
        const action = deviceConnectedAction(event);
        if(!action) { return; }
        this.dispatch(action);
    }
    private deviceDisconnected(event: IDeviceDisconnectedEvent) {
        const action = deviceDisconnectedAction(event);
        if(!action) { return; }
        this.dispatch(action);
    }
    private hostChanged(event: IHostChangedEvent) {
        const action = hostChangedAction(event);
        if(!action) { return; }
        this.dispatch(action);
    }
    private newChatMessage(event: INewChatMessageEvent) {
        const action = newChatMessageAction(event);
        if(!action) { return; }
        this.dispatch(action);
    }
    private setRoomState(event: ISetClassStateEvent) {
        // TODO
        throw new Error('Method not implemented.');
    }
    private trophyRewardedToAll(event: ITrophyRewardedToAllEvent) {
        const action = trophyRewardedToAllAction(event);
        if(!action) { return; }
        this.dispatch(action);
    }
    private trophyRewardedToUser(event: ITrophyRewardedToUserEvent) {
        const action = trophyRewardedToUserAction(event);
        if(!action) { return; }
        this.dispatch(action);
    }

    private resetKeepAliveTimeout(ws: WebSocket, milliseconds = 1000)  {
        if(this.keepAliveTimeout) { clearTimeout(this.keepAliveTimeout); }
        this.keepAliveTimeout = setTimeout(() => this.sendHeartbeat(ws, milliseconds), milliseconds);
    }

    private sendHeartbeat(ws: WebSocket, milliseconds?: number) {
        if(ws.readyState !== WebSocket.OPEN) { return; }
        const message = new Uint8Array(0); //Heartbeat.encode({}).finish()
        ws.send(message);
        this.resetKeepAliveTimeout(ws, milliseconds);
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