import { Dispatch } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';
import { Action, State } from './redux';
import { NewType } from './types';
declare type RequestID = NewType<string, 'RequestID'>;
export declare const newRequestId: (value: string) => RequestID;
export declare class Network {
    readonly dispatch: Dispatch<Action>;
    readonly selector: (s: DefaultRootState) => State;
    private ws?;
    private emitter;
    private pendingRequests;
    private keepAliveTimeout?;
    constructor(dispatch: Dispatch<Action>, selector: (s: DefaultRootState) => State, ws?: Promise<WebSocket> | undefined);
    initWs(url: string): Promise<WebSocket>;
    close(reason?: string): Promise<void>;
    private send;
    private onNetworkMessage;
    private handleRequestPromise;
    private dispatchEvent;
    private actvityStreamIdChanged;
    private classEnded;
    private contentChanged;
    private deviceConnected;
    private deviceDisconnected;
    private hostChanged;
    private newChatMessage;
    private setRoomState;
    private trophyRewardedToAll;
    private trophyRewardedToUser;
    private resetKeepAliveTimeout;
    private sendKeepAlive;
}
export {};
//# sourceMappingURL=network.d.ts.map