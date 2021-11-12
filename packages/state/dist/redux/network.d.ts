import { DeviceID } from '../models';
import { ValueOf } from '../types';
export declare enum ConnectionStatus {
    Connecting = 0,
    Connected = 1,
    Disconnected = 2
}
export declare const setConnectionError: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
export declare const connectionError: import("redux").Reducer<boolean, import("redux").AnyAction>;
export declare const setConnectionStatus: import("@reduxjs/toolkit").ActionCreatorWithPayload<ConnectionStatus, string>;
export declare const connectionStatus: import("redux").Reducer<ConnectionStatus, import("redux").AnyAction>;
export declare const myDeviceId: import("redux").Reducer<DeviceID | null, import("redux").AnyAction>;
export declare const networkReducer: import("redux").Reducer<import("redux").CombinedState<{
    connectionStatus: ConnectionStatus;
    connectionError: boolean;
    myDeviceId: DeviceID | null;
}>, import("redux").AnyAction>;
declare const networkActions: {
    setConnectionError: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
    setConnectionState: import("@reduxjs/toolkit").ActionCreatorWithPayload<ConnectionStatus, string>;
};
export declare type NetworkAction = ReturnType<ValueOf<typeof networkActions>>;
export {};
//# sourceMappingURL=network.d.ts.map