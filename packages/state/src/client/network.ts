import { combineReducers, createAction, createReducer, Dispatch } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';
import { nanoid } from 'nanoid';
import { Action, classActions, State } from '.';
import { NewType, ValueOf } from '../types';
import { ClassRequest, ClassEvent, IClassRequest, IClassResponse, IActivityStreamIdChangedEvent, ITrophyRewardedToUserEvent, ITrophyRewardedToAllEvent, ISetClassStateEvent, INewChatMessageEvent, IHostChangedEvent, IDeviceDisconnectedEvent, IDeviceConnectedEvent, IContentChangedEvent, IClassEndedEvent } from '../protobuf';
import { ActivityStreamID, DeviceID, DeviceState, TrophyType, UserID, WebRTCStreamID } from '../models';


type RequestID = NewType<string, 'RequestID'>
interface NetworkPromise {
    resolve:() => unknown,
    reject: (reason?: string) => unknown
}
export class Network {
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
            if(event.acknowledge) { this.acknowledge(event.acknowledge); }
            if(event.actvityStreamIdChanged) { this.actvityStreamIdChanged(event.actvityStreamIdChanged); }
            if(event.classEnded) { this.classEnded(event.classEnded); }
            if(event.contentChanged) { this.contentChanged(event.contentChanged); }
            if(event.deviceConnected) { this.deviceConnected(event.deviceConnected); }
            if(event.deviceDisconnected) { this.deviceDisconnected(event.deviceDisconnected); }
            if(event.hostChanged) { this.hostChanged(event.hostChanged); }
            if(event.newChatMessage) { this.newChatMessage(event.newChatMessage); }
            if(event.setRoomState) { this.setRoomState(event.setRoomState); }
            if(event.trophyRewardedToAll) { this.trophyRewardedToAll(event.trophyRewardedToAll); }
            if(event.trophyRewardedToUser) { this.trophyRewardedToUser(event.trophyRewardedToUser); }
        } catch (e) {
            ws.close(4400, 'Parse error');
        }
    }

    private acknowledge(event: IClassResponse) {
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
        if(!event.deviceId) { console.error('IActivityStreamIdChangedEvent missing deviceId'); return; }
        if(!event.activityStreamId) { console.error('IActivityStreamIdChangedEvent missing activityStreamId'); return; }
        
        const deviceId = event.deviceId as DeviceID;
        const activityStreamId =  event.activityStreamId as ActivityStreamID;
        const action = classActions.setActivityStreamId({deviceId, activityStreamId});
        
        this.dispatch(action);
    }
    private classEnded(event: IClassEndedEvent) {
        //TODO: handle uint64?
        if(!event.timestamp) { console.error('IClassEndedEvent is missing timestamp'); return; }

        const action = classActions.endClass();
        
        this.dispatch(action);
    }
    private contentChanged(event: IContentChangedEvent) {
        if(!event.content) { console.error('IContentChangedEvent is missing content'); return; }
        if(!event.content.type) { console.error('IContentChangedEvent is missing type'); return; }
        if(!event.content.contentLocation) { console.error('IContentChangedEvent is missing contentLocation'); return; }
        
        // TODO: type conversion
        const type = event.content.type;
        const contentLocation = event.content.contentLocation;
        
        throw new Error('Method not implemented.');
        /*
        const action = classActions.setContent({type, contentLocation});
        
        this.dispatch(action);
        */
    }
    private deviceConnected(event: IDeviceConnectedEvent) {
        if(!event.name) { console.error('IDeviceConnectedEvent is missing name'); return; }
        if(!event.device) { console.error('IDeviceConnectedEvent is missing device'); return; }
        if(!event.device.id) { console.error('IDeviceConnectedEvent is missing device.id'); return; }
        if(!event.device.userId) { console.error('IDeviceConnectedEvent is missing device.userId'); return; }
        
        //Required
        const name = event.name;
        const id = event.device.userId as DeviceID;
        const userId = event.device.userId as UserID;
        //Defaults provided
        const activityStreamID = (event.device.activityStreamId as ActivityStreamID) || undefined;
        const webRTCStreamIDs = (event.device.webRtcStreamIds || []) as WebRTCStreamID[];
        const action = classActions.deviceConnect({
            name,
            device: {
                id,
                userId,
                activityStreamID,
                webRTCStreamIDs,
            },
        });
        
        this.dispatch(action);
    }
    private deviceDisconnected(event: IDeviceDisconnectedEvent) {
        if(!event.deviceId) { console.error('IDeviceDisconnectedEvent is missing deviceId'); return; }

        const deviceId = event.deviceId as DeviceID;
        const action = classActions.deviceDisconnect({deviceId});
        
        this.dispatch(action);
    }
    private hostChanged(event: IHostChangedEvent) {
        if(!event.hostUserId) { console.error('IHostChangedEvent is missing hostUserId'); return; }

        const hostUserId = event.hostUserId as UserID;
        const action = classActions.setHost(hostUserId);
        
        this.dispatch(action);
    }
    private newChatMessage(event: INewChatMessageEvent) {
        if(!event.chatMessage) { console.error('INewChatMessageEvent is missing chatMessage'); return; }
        if(!event.chatMessage.text) { console.error('INewChatMessageEvent is missing chatMessage.text'); return; }
        if(!event.chatMessage.timestamp) { console.error('INewChatMessageEvent is missing chatMessage.timestamp'); return; }
        if(!event.chatMessage.userId) { console.error('INewChatMessageEvent is missing chatMessage.userId'); return; }

        const text = event.chatMessage.text;
        //TODO: handle uint64?
        const timestamp = event.chatMessage.timestamp;
        const userId = event.chatMessage.userId as UserID;
        const action = classActions.addChatMessage({text,timestamp,userId});
        
        this.dispatch(action);
    }
    private setRoomState(event: ISetClassStateEvent) {
        // TODO
        throw new Error('Method not implemented.');
    }
    private trophyRewardedToAll(event: ITrophyRewardedToAllEvent) {
        if(!event.trophy) { console.error('ITrophyRewardedToAllEvent is missing trophy'); return; }
        if(!event.trophy.timestamp) { console.error('ITrophyRewardedToAllEvent is missing trophy.timestamp'); return; }
        if(!event.trophy.type) { console.error('ITrophyRewardedToAllEvent is missing trophy.type'); return; }

        const timestamp = event.trophy.timestamp;
        const type = event.trophy.type as TrophyType;
        const action = classActions.rewardTrophyToAll({
            trophy: { timestamp, type }
        });
        
        this.dispatch(action);
    }
    private trophyRewardedToUser(event: ITrophyRewardedToUserEvent) {
        if(!event.userId) { console.error('ITrophyRewardedToAllEvent is missing userId'); return; }
        if(!event.trophy) { console.error('ITrophyRewardedToAllEvent is missing trophy'); return; }
        if(!event.trophy.timestamp) { console.error('ITrophyRewardedToAllEvent is missing trophy.timestamp'); return; }
        if(!event.trophy.type) { console.error('ITrophyRewardedToAllEvent is missing trophy.type'); return; }

        const userId = event.userId as UserID;
        const timestamp = event.trophy.timestamp;
        const type = event.trophy.type as TrophyType;
        const action = classActions.rewardTrophyToUser({
            userId,
            trophy: { timestamp, type },
        });
        
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