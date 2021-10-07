import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { ContentType, ClassState, UserID, Content, ChatMessageState, newUserId, newTimestamp, DeviceID, ActivityStreamID, DeviceState, Trophy, newDeviceId, UserState } from '../../models';
import { keys, ValueOf } from '../../types';

type Reducer<T=undefined> = CaseReducer<ClassState, PayloadAction<T>>;

export const INITIAL_ROOM_STATE: ClassState = {
  users: {},
  devices: {},
  chatMessages: [],
  content: {
    type: ContentType.Blank,
  },
  hostUserId: newUserId(),
  classEndTime: newTimestamp(),
};

const setState: Reducer<ClassState> = (state, action) => {
  return action.payload;
};

const endClass: Reducer = (state) => {
  state.classEndTime = newTimestamp(Date.now());
};

const deviceConnect: Reducer<{name: string, device: DeviceState}> = (
  state,
  action
) => {
  const { name, device } = action.payload;
  //Device
  state.devices[device.id] = device;
  //User
  const userId = device.userId;
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

};

const deviceDisconnect: Reducer<{deviceId: DeviceID}> = (
  state,
  action
) => {
  const { deviceId } = action.payload;
  const device = state.devices[deviceId] as WritableDraft<DeviceState> | undefined;
  delete state.devices[deviceId];
  if(!device) { return; }
  const user = state.users[device.userId] as WritableDraft<UserState> | undefined;
  if(!user) { return; }
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
    deviceConnect,
    deviceDisconnect, 
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