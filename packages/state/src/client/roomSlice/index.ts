import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import pb from 'kidsloop-live-serialization';
import { ValueOf } from '../../types';

type Reducer<T> = CaseReducer<pb.IState, PayloadAction<T>>;

const initialState: pb.IState = {
  roomId: null,
  participants: {},
  host: null,
  chatMessages: [],
  content: pb.ContentType.Blank,
  endTimestamp: null,
};

const setStateReducer: Reducer<pb.IState> = (state, action) => {
  return {
    ...state,
    ...action.payload,
  };
};

const addParticipantsReducer: Reducer<pb.IAddParticipants> = (
  state,
  action
) => {
  const { participants } = action.payload;
  if (!participants) return state;
  Object.entries(participants).forEach(([id, participant]) => {
    state.participants![id] = participant;
  });
  return state;
};

const removeParticipantsReducer: Reducer<pb.IRemoveParticipants> = (
  state,
  action
) => {
  const { participants } = action.payload;
  if (!participants) return state;
  participants.forEach((id) => {
    delete state.participants![id];
  });
  return state;
};

const changeContentReducer: Reducer<pb.IChangeContent> = (state, action) => {
  state.content = action.payload.content;
  return state;
};

const changeHostReducer: Reducer<pb.IChangeHost> = (state, action) => {
  state.host = action.payload.hostId;
  return state;
};

const appendChatMessageReducer: Reducer<pb.IAppendChatMessage> = (
  state,
  action
) => {
  state.chatMessages = [
    ...(state.chatMessages ?? []),
    ...(action.payload.messages ?? []),
  ];
  return state;
};

// @TODO - This requires an ID somehow?
const receiveTrophyReducer: Reducer<pb.IReceiveTrophy> = (state, _action) => {
  return state;
};

const classEndedReducer: Reducer<pb.IClassEnded> = (state, _action) => {
  state.endTimestamp = Date.now();
  return state;
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setState: setStateReducer,
    addParticipants: addParticipantsReducer,
    removeParticipants: removeParticipantsReducer,
    changeContent: changeContentReducer,
    changeHost: changeHostReducer,
    appendChatMessage: appendChatMessageReducer,
    receiveTrophy: receiveTrophyReducer,
    classEnded: classEndedReducer,
  },
});

export const {
  setState,
  addParticipants,
  removeParticipants,
  changeContent,
  changeHost,
  appendChatMessage,
  receiveTrophy,
  classEnded,
} = roomSlice.actions;

export const Actions = roomSlice.actions;
export const roomReducer = roomSlice.reducer;
export type RoomState = ReturnType<typeof roomReducer>
export const INITIAL_ROOM_STATE = initialState;
export type RoomActions = ReturnType<ValueOf<typeof roomSlice.actions>>
