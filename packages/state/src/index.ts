import { ConnectionStatus } from './client/network';

export * as Server from './server';
export * as Client from './client';
export { NetworkContext } from './react/context';
export { NetworkProvider } from './react/provider';
export { ConnectionState, useConnectionState } from './react/hooks/useConnectionState';
export { JoinClassHook, useJoinClass } from './react/hooks/useJoinClass';
ConnectionStatus

export type ID = string;

export interface Context {
  userId: ID;
  isTeacher: boolean;
  name: string;
}

export type ContextPayload<T> = {
  context: Context;
  payload: T;
};