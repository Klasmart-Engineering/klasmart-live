import { createAction, createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { DeviceID } from '../models';
import { ValueOf } from '../types';
import { classActions } from "./class"

/* eslint-disable no-unused-vars */
export enum ConnectionStatus {
    Connecting,
    Connected,
    Disconnected,
}
/* eslint-enable no-unused-vars */

export const setConnectionError = createAction<boolean>('setConnectionError');
export const connectionError = createReducer<boolean>(
    false, (builder) => builder.addCase(setConnectionError, (_, {payload}) => payload)
);

export const setConnectionStatus = createAction<ConnectionStatus>('setConnectionState');
export const connectionStatus = createReducer<ConnectionStatus>(
    ConnectionStatus.Disconnected,
    (builder) => builder.addCase(setConnectionStatus, (_, {payload}) => payload)
);


export const myDeviceId = createReducer<DeviceID|null>(
    null,
    (builder) => builder.addCase(classActions.join, (_, {payload}) => payload.deviceId)
);

export const networkReducer = combineReducers({
    connectionStatus,
    connectionError,
    myDeviceId,
});

const networkActions = {
    setConnectionError,
    setConnectionState: setConnectionStatus,
};

export type NetworkAction = ReturnType<ValueOf<typeof networkActions>>