import { Store } from '@reduxjs/toolkit';
import { Action, ClassActionType, NetworkHandlerCallback, State } from './ui';
import { NewType } from './types';
import { IClassRequest } from './protobuf';
export declare type RequestID = NewType<string, 'RequestID'>;
export declare const newRequestId: (value: string) => RequestID;
export declare class Network<ApplicationState = unknown> {
    readonly store: Store<ApplicationState, Action>;
    readonly selector: (s: ApplicationState) => State;
    private ws?;
    private actionEmitter;
    private pendingRequests;
    private recieveTimeoutReference?;
    private recieveMessageTimeoutTime;
    private keepAliveTimeoutReference?;
    private sendKeepAliveMessageInterval;
    constructor(store: Store<ApplicationState, Action>, selector: (s: ApplicationState) => State, ws?: Promise<WebSocket> | undefined);
    onClassAction<T extends ClassActionType = ClassActionType>(actionType: T, f: NetworkHandlerCallback<T>): () => void;
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