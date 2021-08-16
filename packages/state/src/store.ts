import { configureStore } from '@reduxjs/toolkit';
import { Participant, ChatMessage } from './state';
import { roomReducer } from './roomSlice';

export type ID = string;
export interface Context {
  userId: ID;
  isTeacher: boolean;
}

export type ContextPayload<T> = {
  context: Context;
  payload: T;
};

export const store = configureStore({
  reducer: {
    room: roomReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
