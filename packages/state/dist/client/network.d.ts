import { Dispatch } from 'react';
import { DefaultRootState } from 'react-redux';
import { State } from '.';
export declare class Network {
    readonly dispatch: Dispatch<NetworkActions>;
    readonly selector: (s: DefaultRootState) => State;
    private ws?;
    constructor(dispatch: Dispatch<NetworkActions>, selector: (s: DefaultRootState) => State, ws?: Promise<WebSocket> | undefined);
    initWs(url: string): Promise<WebSocket>;
    private networkMessage;
    private sendHeartbeat;
}
export declare const setConnectionState: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
export declare const connectionState: import("redux").Reducer<boolean, import("redux").AnyAction>;
export declare type NetworkActions = ReturnType<typeof setConnectionState>;
export declare const networkReducer: import("redux").Reducer<import("redux").CombinedState<{
    connectionState: boolean;
}>, import("redux").AnyAction>;
//# sourceMappingURL=network.d.ts.map