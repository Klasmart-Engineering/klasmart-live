export * from './roomSlice';
export * from './network';
import { NetworkAction } from './network';
import { ClassAction } from './roomSlice';
export declare const reducer: import("redux").Reducer<import("redux").CombinedState<{
    network: import("redux").CombinedState<{
        connectionStatus: import("./network").ConnectionStatus;
        connectionError: boolean;
    }>;
    room: import("../models").ClassState;
}>, import("redux").AnyAction>;
export declare type State = ReturnType<typeof reducer>;
export declare type Action = NetworkAction | ClassAction;
//# sourceMappingURL=index.d.ts.map