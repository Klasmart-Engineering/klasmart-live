export * as pb from './protobuf';
export * from './models';
export { NetworkContext } from './react/context';
export { NetworkProvider } from './react/provider';
export { SendChatMessageHook, useSendChatMessage } from './react/hooks/actions/useSendChatMessage';
export { JoinClassHook, useJoinClass } from './react/hooks/actions/useJoinClass';
export { LeaveClassHook, useLeaveClass } from './react/hooks/actions/useLeaveClass';
export { SetContentHook, useSetContent } from './react/hooks/actions/useSetContent';
export { ConnectionState, useConnectionState } from './react/hooks/data/useConnectionState';
export { useMessages } from './react/hooks/data/useMessages';
export { ClassAction, classReducer } from './redux/class';
import { NetworkAction } from './redux/network';
import { ClassAction } from './redux/class';
export declare const reducer: import("redux").Reducer<import("redux").CombinedState<{
    network: import("redux").CombinedState<{
        connectionStatus: import("./redux/network").ConnectionStatus;
        connectionError: boolean;
    }>;
    room: import("./models").ClassState;
}>, import("redux").AnyAction>;
export declare type State = ReturnType<typeof reducer>;
export declare type Action = NetworkAction | ClassAction;
//# sourceMappingURL=index.d.ts.map