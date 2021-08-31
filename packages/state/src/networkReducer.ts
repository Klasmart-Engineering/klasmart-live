import { createReducer, createAction } from "@reduxjs/toolkit";

export const setConnectionCount = createAction<number>('setConnectionCount')

export const connectionCount = createReducer<number>(0, (builder) => {
    builder.addCase(setConnectionCount, (state, action) => action.payload)
});


export const setConnectionState = createAction<boolean>('setConnectionState')

export const connectionState = createReducer<boolean>(false, (builder) => {
    builder.addCase(setConnectionState, (state, action) => action.payload)
});