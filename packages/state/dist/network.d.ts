import { Dispatch } from '@reduxjs/toolkit';
import { Action, ClassActionType, ClassActionTypeToPayload, State } from './ui';
import { NewType } from './types';
import { IClassRequest } from './protobuf';
export declare type RequestID = NewType<string, 'RequestID'>;
export declare const newRequestId: (value: string) => RequestID;
export declare class Network {
    readonly dispatch: Dispatch<Action>;
    readonly selector: (s: unknown) => State;
    private ws?;
    private actionEmitter;
    private pendingRequests;
    private recieveTimeoutReference?;
    private recieveMessageTimeoutTime;
    private keepAliveTimeoutReference?;
    private sendKeepAliveMessageInterval;
    constructor(dispatch: Dispatch<Action>, selector: (s: unknown) => State, ws?: Promise<WebSocket> | undefined);
    onAction<T extends ClassActionType = ClassActionType>(actionType: T, f: (payload: ClassActionTypeToPayload[T]) => unknown): () => void;
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