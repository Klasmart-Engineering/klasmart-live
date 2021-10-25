export * as pb from './protobuf';
export * from './protobuf/actions';
export * from './redux/class';
export * from './redux/network';
export * from './models';
import { ClassAction } from './redux/class';
import { NetworkAction } from './redux/network';
export declare const reducer: import("redux").Reducer<import("redux").CombinedState<{
    class: import("./models").ClassState;
    network: import("redux").CombinedState<{
        connectionStatus: import("./redux/network").ConnectionStatus;
        connectionError: boolean;
    }>;
}>, import("redux").AnyAction>;
export declare type State = ReturnType<typeof reducer>;
export declare type Action = ClassAction | NetworkAction;
//# sourceMappingURL=server.d.ts.map