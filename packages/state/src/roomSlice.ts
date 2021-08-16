import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Map } from 'immutable';
import {
  Message, Participant, ChatMessage, TrophyMessage,
} from './state';
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
  participants: { [id: string]: Participant };
  teachers: ID[];
  // teachers: Map<ID, Participant>;
  // students: Map<ID, Participant>;
  host?: ID;
  chat: Message[];
}

const initialState: RoomState = {
  participants: {},
  teachers: [],
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
  const {
    context: { isTeacher, userId },
    payload,
  } = action.payload;

  const participants = { ...state.participants, [userId]: payload.participant };
  const teachers = [...state.teachers];

  if (isTeacher && !teachers.includes(userId)) {
    teachers.push(userId);
  }

  return { ...state, participants, teachers };
};

const userLeaveReducer: CaseReducer<RoomState, PayloadAction<Context>> = (
  state,
  action,
) => {
  const { userId, isTeacher } = action.payload;

  const participants = { ...state.participants };
  delete participants[userId];

  let { teachers } = state;
  if (isTeacher) {
    teachers = teachers.filter((id) => id !== userId);
  }

  return { ...state, teachers, participants };
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

const addTrophyReducer: CaseReducer<
  RoomState,
  PayloadAction<ContextPayload<TrophyMessage>>
> = (state, action) => {
  const { participants } = state;
  const trophy = action.payload.payload;
  if (trophy.user) {
    participants[trophy.user].trophies.push(trophy);
  } else {
    Object.keys(participants).forEach((id) => {
      const { trophies } = participants[id];
      trophies.push(trophy);
      participants[id].trophies = trophies;
    });
  }

  return { ...state, students: participants };
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    userJoin: userJoinReducer,
    userLeave: userLeaveReducer,
    sendChatMessage: sendChatMessageReducer,
    setHost: setHostReducer,
    addTrophy: addTrophyReducer,
  },
});

export const {
  userJoin,
  userLeave,
  sendChatMessage,
  setHost,
  addTrophy,
} = roomSlice.actions;

export const roomReducer = roomSlice.reducer;
