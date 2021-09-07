import { configureStore } from '@reduxjs/toolkit';
import { roomReducer } from './roomSlice';

export type ID = string;
export interface Context {
  userId: ID;
  isTeacher: boolean;
  name: string;
}

export type ContextPayload<T> = {
  context: Context;
  payload: T;
};

export const store = configureStore({
  middleware: [],
  reducer: {
    room: roomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
