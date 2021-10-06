import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContentType, ClassState, UserID, Content, ChatMessageState, userId, timestamp, DeviceID, ActivityStreamID, DeviceState, Trophy } from '../../models';
import { keys, ValueOf } from '../../types';

type Reducer<T=undefined> = CaseReducer<ClassState, PayloadAction<T>>;

export const INITIAL_ROOM_STATE: ClassState = {
  users: {},
  devices: {},
  chatMessages: [],
  content: {
    type: ContentType.Blank,
  },
  hostUserId: userId(),
  classEndTime: timestamp(),
};

const setState: Reducer<ClassState> = (state, action) => {
  return action.payload;
};

const endClass: Reducer = (state) => {
  state.classEndTime = timestamp(Date.now());
};

const joinClass: Reducer<{userId: UserID, name: string, device: DeviceState}> = (
  state,
  action
) => {
  const { userId, name, device } = action.payload;
  if(userId in state.users) {
    state.users[userId].deviceIds.push(device.id);
  } else {
    state.users[userId] = {
      id: userId,
      name,
      deviceIds: [device.id],
      trophies: [],
    };
  }

  state.devices[device.id] = device;
};

const leaveClass: Reducer<{userId: UserID, deviceId: DeviceID}> = (
  state,
  action
) => {
  const { deviceId, userId } = action.payload;
  delete state.devices[deviceId];
  const user = state.users[userId];
  user.deviceIds = user.deviceIds.filter((id) => id !== deviceId);
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
export const classActions = classSlice.actions;
export type ClassAction = ReturnType<ValueOf<typeof classActions>>