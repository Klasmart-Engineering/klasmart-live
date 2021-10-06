export * from './roomSlice';
export * from './network';

import { combineReducers } from 'redux';
import { networkReducer, NetworkAction } from './network';
import { classReducer, ClassAction } from './roomSlice';

export const reducer = combineReducers({
    network: networkReducer,
    room: classReducer,
});

export type State = ReturnType<typeof reducer> 
export type Action =  NetworkAction | ClassAction
