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

import { combineReducers } from 'redux';
import { NetworkAction, networkReducer } from './redux/network';
import { ClassAction, classReducer } from './redux/class';

export const reducer = combineReducers({
  network: networkReducer,
  room: classReducer,
});
export type State = ReturnType<typeof reducer> 
export type Action =  NetworkAction | ClassAction