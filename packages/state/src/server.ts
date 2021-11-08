export * as pb from './protobuf';
export * from './protobuf/actions';

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
