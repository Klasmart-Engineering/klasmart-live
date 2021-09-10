import { configureStore } from "@reduxjs/toolkit";
import { Client } from "kidsloop-live-state";
import { IChatMessage, IState } from "kidsloop-live-serialization";

const { roomReducer } = Client;

export const store = configureStore({
    middleware: [],
    reducer: {
      room: roomReducer,
    },
  });


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectRoom = (state: RootState): IState => state.room;
export const selectChatMessages = (state: RootState): IChatMessage[] => state.room.chatMessages || [];