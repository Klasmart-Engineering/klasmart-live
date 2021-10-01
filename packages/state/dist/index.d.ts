export { ConnectionStatus } from './client/network';
export * as Server from './server';
export * as Client from './client';
export { NetworkContext } from './react/context';
export { NetworkProvider } from './react/provider';
export { AddMessageHook, useAddMessage } from './react/hooks/actions/useAddMessage';
export { JoinClassHook, useJoinClass } from './react/hooks/actions/useJoinClass';
export { LeaveClassHook, useLeaveClass } from './react/hooks/actions/useLeaveClass';
export { SetContentHook, useSetContent } from './react/hooks/actions/useSetContent';
export { ConnectionState, useConnectionState } from './react/hooks/data/useConnectionState';
export { useMessages } from './react/hooks/data/useMessages';
export * as models from './models';
export declare type ID = string;
export interface Context {
    userId: ID;
    isTeacher: boolean;
    name: string;
}
export declare type ContextPayload<T> = {
    context: Context;
    payload: T;
};
//# sourceMappingURL=index.d.ts.map