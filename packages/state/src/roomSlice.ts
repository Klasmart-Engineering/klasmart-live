import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Map } from 'immutable';
import { Message, Participant, ChatMessage } from './state';
import { ID, ContextPayload, Context } from './store';

export interface GetUserId {
  getUserId(): ID;
}

function checkUserMatchesAuth(token: Context, toCheck: GetUserId): void {
  if (token.userId !== toCheck.getUserId()) {
    throw new Error(
      `Expected Token User ID ${
        token.userId
      } to match Payload ID ${toCheck.getUserId()}`,
    );
  }
}

interface RoomState {
  teachers: { [id: string]: Participant };
  students: { [id: string]: Participant };
  // teachers: Map<ID, Participant>;
  // students: Map<ID, Participant>;
  host?: ID;
  chat: Message[];
}

const initialState: RoomState = {
  teachers: {},
  students: {},
  // teachers: Map<ID, Participant>(),
  // students: Map<ID, Participant>(),
  host: undefined,
  chat: [],
};

export interface UserPayload {
  id: ID;
  participant: Participant;
}

const userJoinReducer: CaseReducer<
  RoomState,
  PayloadAction<ContextPayload<UserPayload>>
> = (state, action) => {
  const { context: token, payload } = action.payload;
  // checkUserMatchesAuth(token, payload);

  const teachers = { ...state.teachers };
  const students = { ...state.students };

  if (token.isTeacher) {
    teachers[payload.id] = payload.participant;
  } else {
    students[payload.id] = payload.participant;
  }

  return { ...state, teachers, students };
};

const userLeaveReducer: CaseReducer<RoomState, PayloadAction<Context>> = (
  state,
  action,
) => {
  const { userId, isTeacher } = action.payload;

  const teachers = { ...state.teachers };
  const students = { ...state.students };

  if (isTeacher) {
    delete teachers[userId];
  } else {
    delete students[userId];
  }

  return { ...state, teachers, students };
};

const sendChatMessageReducer: CaseReducer<
  RoomState,
  PayloadAction<ContextPayload<ChatMessage>>
> = (state, action) => {
  const {
    context: { userId },
    payload: { message, timestamp },
  } = action.payload;
  const newMessage = {
    userId,
    message,
    timestamp,
  } as Message;

  return { ...state, chat: [newMessage, ...state.chat] };
};

// @TODO - Probably want to make it so only teacher/internal server can set host?
const setHostReducer: CaseReducer<
  RoomState,
  PayloadAction<ContextPayload<ID>>
> = (state, action) => {
  const userId = action.payload.payload;

  return { ...state, host: userId };
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    userJoin: userJoinReducer,
    userLeave: userLeaveReducer,
    sendChatMessage: sendChatMessageReducer,
    setHost: setHostReducer,
  },
});

export const {
  userJoin,
  userLeave,
  sendChatMessage,
  setHost,
} = roomSlice.actions;

export const roomReducer = roomSlice.reducer;
