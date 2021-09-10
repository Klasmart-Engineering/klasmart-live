import { configureStore } from '@reduxjs/toolkit';
import { roomReducer } from './roomSlice';

const store = configureStore({
  middleware: [],
  reducer: {
    room: roomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
