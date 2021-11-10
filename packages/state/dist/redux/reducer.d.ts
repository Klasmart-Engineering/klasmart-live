import { ClassAction } from './class';
import { NetworkAction } from './network';
export declare const reducer: import("redux").Reducer<import("redux").CombinedState<{
    class: import("../models").ClassState;
    network: import("redux").CombinedState<{
        connectionStatus: import("./network").ConnectionStatus;
        connectionError: boolean;
    }>;
}>, import("redux").AnyAction>;
export declare type State = ReturnType<typeof reducer>;
export declare type Action = ClassAction | NetworkAction;
//# sourceMappingURL=reducer.d.ts.map