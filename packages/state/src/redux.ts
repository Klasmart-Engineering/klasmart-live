import { configureStore } from "@reduxjs/toolkit";
import { connectionCount, connectionState } from './networkReducer';

export const store = configureStore({
  middleware: [],
  reducer: {
    setConnectionCount: connectionCount,
    setConnectionState: connectionState,
  },
});

