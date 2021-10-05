export * from './roomSlice';
export * from './network';

import { combineReducers } from 'redux';
import {  NetworkAction, networkReducer } from './network';
import { roomReducer, RoomAction } from './roomSlice';

export const reducer = combineReducers({
    network: networkReducer,
    room: roomReducer,
});

export type State = ReturnType<typeof reducer> 
export type Action =  NetworkAction | RoomAction
