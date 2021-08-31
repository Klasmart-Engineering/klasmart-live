import { configureStore } from "@reduxjs/toolkit";
import { connectionCount, connectionState, roomId } from './networkReducer';

export const store = configureStore({
  middleware: [],
  reducer: {
    connectionCount,
    connectionState,
    roomId,
  },
});

export type Dispatch = typeof store.dispatch