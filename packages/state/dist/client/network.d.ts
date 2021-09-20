import { Dispatch } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';
import { Actions, State } from '.';
import * as pb from 'kidsloop-live-serialization';
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
export declare const setConnectionState: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
export declare const connectionState: import("redux").Reducer<boolean, import("redux").AnyAction>;
export declare type NetworkActions = ReturnType<typeof setConnectionState>;
export declare const networkReducer: import("redux").Reducer<import("redux").CombinedState<{
    connectionState: boolean;
}>, import("redux").AnyAction>;
//# sourceMappingURL=network.d.ts.map