import { combineReducers, createAction, createReducer } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/types/types-external';

export interface ActivityStream {
  activityId: string
  streamId: string
}

export interface ChatMessage {
  timestamp: number
  userId: number
  text: string
}

export enum ContentType {
  Blank = 0,
  WebRTCStream = 1,
  ActivityStream = 2,
  H5P = 3,
  Image = 4,
  Video = 5,
  Audio = 6,
}

export interface Content {
  type: ContentType
  locator?: string
}

export interface Device {
  userId?: number
  activityStream?: ActivityStream
}

export interface User {
  name?: string
  teacher?: boolean
}

export interface Update<T> {
  id: number,
  update: Partial<T>
}


export const updateDevice = createAction<Update<Device>, 'updateDevice'>('updateDevice');
export const updateUser = createAction<Update<User>, 'updateUser'>('updateUser');
export const addChatMessage = createAction<ChatMessage, 'addChatMessage'>('addChatMessage');
export const setRoomId = createAction<string, 'setRoomId'>('setRoomId');
export const setHostId = createAction<number | undefined, 'setHostId'>('setHostId');
export const setContent = createAction<Content | undefined, 'setContent'>('setContent');
export const setEndTimestamp = createAction<number, 'endClass'>('endClass');
export const setUrl = createAction<URL, 'setUrl'>('setUrl');
export const setConnected = createAction<boolean, 'setConnected'>('setConnected');


function updateObject<V>(draft: WritableDraft<V>, update: Partial<V>) {
  for(const key of Object.keys(update) as Array<keyof V>) {
    draft[key] = update[key] as any;
  }
}

export const devices = createReducer<Record<number, Device>>(
  {},
  b => b.addCase(updateDevice, (devices, { payload: { id, update } }) => {
    const current = devices[id];
    if (!current) { devices[id] = update; return; }
    updateObject(current, update);
  })
);

export const users = createReducer<Record<number, User>>(
  {},
  b => b.addCase(updateUser, (users, { payload: { id, update } }) => {
    const current = users[id];
    if (!current) { users[id] = update; return; }
    updateObject(current, update);
  })
);

const MAX_CHAT_MESSAGES = 1000;
export const chatMessages = createReducer<ChatMessage[]>(
  [],
  b => b.addCase(
    addChatMessage,
    (chatMessages, { payload }) => [...chatMessages, payload]
      .slice(-MAX_CHAT_MESSAGES)
      .sort((a, b) => a.timestamp - b.timestamp)
  )
);

export const roomId = createReducer<string | undefined>(
  undefined,
  b => b.addCase(setRoomId, (_, { payload }) => payload),
);

export const hostId = createReducer<number | undefined>(
  undefined,
  b => b.addCase(setHostId, (_, { payload }) => payload),
);

export const content = createReducer<Content>(
  { type: ContentType.Blank },
  b => b.addCase(setContent, (_, { payload }) => payload || { type: ContentType.Blank }),
);

export const endTimestamp = createReducer<undefined | number>(
  undefined,
  b => b.addCase(setEndTimestamp, (_, { payload }) => payload),
);

export const room = combineReducers(
  {
    roomId,
    users,
    devices,
    chatMessages,
    hostId,
    content,
    endTimestamp,
  }
);

export const url = createReducer<URL | undefined>(
  undefined,
  b => b.addCase(setUrl, (_, { payload }) => payload),
);

export const connected = createReducer<boolean>(
  false,
  b => b.addCase(setConnected, (_, { payload }) => payload),
);

export const root = combineReducers(
  {
    url,
    connected,
    room,
  }
);

export type RootState = ReturnType<typeof root>