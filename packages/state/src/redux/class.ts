import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { ContentType, ClassState, UserID, Content, ChatMessageState, DeviceID, ActivityStreamID, DeviceState, Trophy, UserRole, Timestamp } from '../models';
import { ValueOf, values } from '../types';
import { isAllowedToBecomeHost } from './authorization';

type Reducer<P = void, T extends string = string> = CaseReducer<ClassState, PayloadAction<P, T>>;

export const INITIAL_ROOM_STATE: ClassState = {
  users: {},
  devices: {},
  chatMessages: [],
  content: {
    type: ContentType.Blank,
  },
  hostDeviceId: undefined,
  classEndTime: undefined,
};

const join: Reducer<{state: ClassState, deviceId: DeviceID}> = (_state, action) => action.payload.state;

const endClass: Reducer<{ timestamp: Timestamp }> = (state, action) => {
  state.classEndTime = action.payload.timestamp;
};

const deviceConnect: Reducer<{name: string, device: DeviceState, role: UserRole}> = (
  state,
  action
) => {
  const { name, device, role } = action.payload;
  //Device
  state.devices[device.id] = device;
  //User
  const userId = device.userId;
  const user = state.users[userId]
  if(user) {
    user.deviceIds.push(device.id);
  } else {
    state.users[userId] = {
      id: userId,
      name,
      role,
      deviceIds: [device.id],
      trophies: [],
    };
  }
  if(!state.hostDeviceId && isAllowedToBecomeHost(role)) {
    state.hostDeviceId = device.id;
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

  if(state.hostDeviceId === device.id) {
    state.hostDeviceId = undefined;
    const userIds = Object.keys(state.users) as UserID[];
    // userIds.sort(); sort may be unecessary
    // It ensures deterministic evaluation on all clients, regardless of the keys array ordering
    // Which could be affected by serialization and deserialization during network messages
    userIds.sort();
    for(const userId of userIds) {
      const user = state.users[userId];
      if(!user) { continue }
      const deviceId = user.deviceIds[0]
      if(!deviceId) {continue }
      if(isAllowedToBecomeHost(user.role)) {
        state.hostDeviceId = deviceId;
        break;
      }
    }
  }
};

const setHost: Reducer<DeviceID> = (state, action) => {
  state.hostDeviceId = action.payload;
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
  const device = state.devices[deviceId]
  if(!device) { return } 
  device.activityStreamID = activityStreamId;
};

const rewardTrophyToUser: Reducer<{userId: UserID, trophy: Trophy}> = (
  state,
  action
) => {
  const { userId, trophy } = action.payload;
  state.users[userId]?.trophies.push(trophy);
};

const rewardTrophyToAll: Reducer<{trophy: Trophy}> = (
  state,
  action
) => {
  const { trophy } = action.payload;
  values(state.users).forEach(user => user.trophies.push(trophy))
};


export const classSliceActionPrefix = "class"
export const classSlice = createSlice({
  name: classSliceActionPrefix,
  initialState: INITIAL_ROOM_STATE,
  reducers: {
    join,
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
export type ClassActionType = keyof typeof classActions 
export type ClassAction = ReturnType<ValueOf<typeof classActions>>

export type ClassActionTypeToPayload = {
  [K in keyof typeof classActions]: ReturnType<typeof classActions[K]>["payload"]; 
}