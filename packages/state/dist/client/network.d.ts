import { Dispatch } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';
import { Actions, State } from '.';
import * as pb from '../protobuf';
import { ValueOf } from '../types';
export declare class Network {
    readonly dispatch: Dispatch<Actions>;
    readonly selector: (s: DefaultRootState) => State;
    private ws?;
    constructor(dispatch: Dispatch<Actions>, selector: (s: DefaultRootState) => State, ws?: Promise<WebSocket> | undefined);
    initWs(url: string): Promise<WebSocket>;
    send(actionProperties: pb.IAction): Promise<void>;
    close(reason?: string): Promise<void>;
    private onNetworkMessage;
    private sendHeartbeat;
}
export declare enum ConnectionStatus {
    Connecting = 0,
    Connected = 1,
    Disconnected = 2
}
export declare const setConnectionError: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
export declare const connectionError: import("redux").Reducer<boolean, import("redux").AnyAction>;
export declare const setConnectionStatus: import("@reduxjs/toolkit").ActionCreatorWithPayload<ConnectionStatus, string>;
export declare const connectionStatus: import("redux").Reducer<ConnectionStatus, import("redux").AnyAction>;
export declare const networkReducer: import("redux").Reducer<import("redux").CombinedState<{
    connectionStatus: ConnectionStatus;
    connectionError: boolean;
}>, import("redux").AnyAction>;
declare const networkActions: {
    setConnectionError: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
    setConnectionState: import("@reduxjs/toolkit").ActionCreatorWithPayload<ConnectionStatus, string>;
};
export declare type NetworkActions = ReturnType<ValueOf<typeof networkActions>>;
export {};
//# sourceMappingURL=network.d.ts.map