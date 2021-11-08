export * as pb from './protobuf';
export * from './protobuf/actions';

export * from './react/hooks/actions/useJoinClass';
export * from './react/hooks/actions/useLeaveClass';
export * from './react/hooks/actions/useSendChatMessage';
export * from './react/hooks/actions/useSetContent';

export * from './react/hooks/data/useConnectionState';
export * from './react/hooks/data/useMessages';
export * from './react/hooks/data/useUser';

export * from './react/context';
export * from './react/provider';

export * from './redux/class';
export * from './redux/network';

export * from './roles';

export * from './models';

import { combineReducers } from 'redux';
import { ClassAction, classReducer } from './redux/class';
import { NetworkAction, networkReducer } from './redux/network';

export const reducer = combineReducers({
  class: classReducer,
  network: networkReducer,
});
export type State = ReturnType<typeof reducer> 
export type Action =  ClassAction | NetworkAction
