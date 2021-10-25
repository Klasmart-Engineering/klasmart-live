import { Dispatch } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';
import { Action, State } from './ui';
import { NewType } from './types';
import { IClassRequest } from './protobuf';
export declare type RequestID = NewType<string, 'RequestID'>;
export declare const newRequestId: (value: string) => RequestID;
export declare class Network {
    readonly dispatch: Dispatch<Action>;
    readonly selector: (s: DefaultRootState) => State;
    private ws?;
    private emitter;
    private pendingRequests;
    private recieveTimeoutReference?;
    private recieveMessageTimeoutTime;
    private keepAliveTimeoutReference?;
    private sendKeepAliveMessageInterval;
    constructor(dispatch: Dispatch<Action>, selector: (s: DefaultRootState) => State, ws?: Promise<WebSocket> | undefined);
    initWs(url: string): Promise<WebSocket>;
    close(code?: number | undefined, reason?: string): Promise<void>;
    send(command: IClassRequest): Promise<void>;
    private _send;
    private onNetworkMessage;
    private handleRequestPromise;
    private resetNetworkRecieveTimeout;
    private resetNetworkSendTimeout;
}
//# sourceMappingURL=network.d.ts.map