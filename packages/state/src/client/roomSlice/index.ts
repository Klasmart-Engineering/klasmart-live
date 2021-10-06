import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContentType, ClassState as State, UserID, UserState, Content, ChatMessageState, userId, timestamp, DeviceID, ActivityStreamID, DeviceState, Trophy } from '../../models';
import { keys, ValueOf } from '../../types';

type Reducer<T> = CaseReducer<State, PayloadAction<T>>;

export const INITIAL_ROOM_STATE: State = {
  users: {},
  devices: {},
  chatMessages: [],
  content: {
    type: ContentType.Blank,
  },
  hostUserId: userId(),
  classEndTime: timestamp(),
};

const setState: Reducer<State> = (state, action) => {
  return action.payload;
};

const endClass: Reducer<undefined> = (state) => {
  state.classEndTime = timestamp(Date.now());
};

const joinClass: Reducer<{user: UserState, device: DeviceState}> = (
  state,
  action
) => {
  const { user, device } = action.payload;
  state.users[user.id] = user;
  state.devices[device.id] = device;
};

const leaveClass: Reducer<UserID> = (
  state,
  action
) => {
  const userId = action.payload;
  delete state.users[userId];
};

const setHost: Reducer<UserID> = (state, action) => {
  state.hostUserId = action.payload;
};

const setContent: Reducer<Content> = (state, action) => {
  state.content = action.payload;
};

const addChatMessage: Reducer<ChatMessageState> = (
  state,
  action
) => {
  const chatMessage = action.payload;
  state.chatMessages.push(chatMessage);
};

const setActivityStreamId: Reducer<{deviceId: DeviceID, activityStreamId: ActivityStreamID}> = (
  state,
  action
) => {
  const { deviceId, activityStreamId } = action.payload;
  state.devices[deviceId].activityStreamID = activityStreamId;
};

const rewardTrophyToUser: Reducer<{userId: UserID, trophy: Trophy}> = (
  state,
  action
) => {
  const { userId, trophy } = action.payload;
  state.users[userId].trophies.push(trophy);
};

const rewardTrophyToAll: Reducer<{trophy: Trophy}> = (
  state,
  action
) => {
  const { trophy } = action.payload;
  keys(state.users).forEach((id) => {
    state.users[id].trophies.push(trophy);
  });
};

export const classSlice = createSlice({
  name: 'class',
  initialState: INITIAL_ROOM_STATE,
  reducers: {
    setState,
    endClass,
    joinClass,
    leaveClass, 
    setHost,
    setContent,
    addChatMessage,
    setActivityStreamId,
    rewardTrophyToUser,
    rewardTrophyToAll,
  },
});

export const classReducer = classSlice.reducer;
export type ClassState = ReturnType<typeof classReducer>
export const classActions = classSlice.actions;
export type ClassAction = ReturnType<ValueOf<typeof classActions>>