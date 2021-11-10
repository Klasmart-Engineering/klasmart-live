import { combineReducers } from 'redux';
import { ClassAction, classReducer } from './class';
import { NetworkAction, networkReducer } from './network';

export const reducer = combineReducers({
  class: classReducer,
  network: networkReducer,
});

export type State = ReturnType<typeof reducer> 
export type Action =  ClassAction | NetworkAction
