import { combineReducers } from 'redux';
import {  NetworkActions, networkReducer } from './network';
import { RoomActions, roomReducer } from './roomSlice';
export { roomReducer, Actions, INITIAL_ROOM_STATE } from './roomSlice';

export const reducer = combineReducers({
    room: roomReducer,
    network: networkReducer,
});

export type State = ReturnType<typeof reducer> 
export type Actions =  NetworkActions | RoomActions
