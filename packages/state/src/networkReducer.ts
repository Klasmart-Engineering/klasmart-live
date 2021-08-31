import { createReducer } from "@reduxjs/toolkit";
import { setConnectionCount, setConnectionState, setRoomId } from "./networkActions";

export const connectionCount = createReducer<number>(0, (builder) => {
    builder.addCase(setConnectionCount, (state, action) => action.payload)
});

export const connectionState = createReducer<boolean>(false, (builder) => {
    builder.addCase(setConnectionState, (state, action) => action.payload)
});

export const roomId = createReducer<string>("", (builder) => {
    builder.addCase(setRoomId, (state, action) => action.payload)
});