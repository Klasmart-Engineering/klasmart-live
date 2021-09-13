import { configureStore, Dispatch, Middleware } from '@reduxjs/toolkit';
import { Client } from 'kidsloop-live-state';
import { IChatMessage, IState } from 'kidsloop-live-serialization';

const { roomReducer } = Client;

const loggerMiddleware: Middleware<Dispatch> =
  (store) => (next) => (action) => {
    console.log('Dispatching Action: ' + JSON.stringify(action));
    const result = next(action);
    console.log('Room state: ' + JSON.stringify(store.getState().room));
    return result;
  };

export const store = configureStore({
  middleware: [loggerMiddleware],
  reducer: {
    room: roomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectRoom = (state: RootState): IState => state.room;
export const selectChatMessages = (state: RootState): IChatMessage[] =>
  state.room.chatMessages || [];
