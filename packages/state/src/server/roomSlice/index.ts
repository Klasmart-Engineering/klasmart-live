import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import pb from 'kidsloop-live-serialization';
import { ContextPayload } from '../../';
import { getDevice, getDevices } from './util';

type Reducer<T> = CaseReducer<pb.IState, PayloadAction<ContextPayload<T>>>;

const initialState: pb.IState = {
  roomId: null,
  participants: {},
  host: null,
  chatMessages: [],
  content: pb.ContentType.Blank,
  endTimestamp: null,
};

const userJoinReducer: Reducer<pb.IUserJoin> = (state, action) => {
  const {
    context: { userId, name },
  } = action.payload;
  let { participants } = state;

  if (!participants) {
    participants = {};
  }

  const participant: pb.IParticipant = {
    name,
    devices: {},
    trophies: [],
  };

  participants[userId] = participant;
  return state;
};

const userLeaveReducer: Reducer<pb.IUserLeave> = (state, action) => {
  const {
    context: { userId },
  } = action.payload;

  let { participants } = state;

  if (!participants) {
    participants = {};
  }

  delete participants[userId];

  return state;
};

const sendChatMessageReducer: Reducer<pb.ISendChatMessage> = (
  state,
  action
) => {
  const {
    context: { userId },
    payload: { message },
  } = action.payload;
  if (!message || message.length === 0) return state;

  const msg: pb.IChatMessage = {
    fromUser: userId,
    message,
    timestamp: Date.now(),
  };
  if (!state.chatMessages) {
    state.chatMessages = [];
  }
  state.chatMessages.push(msg);

  return state;
};

// @TODO - Probably want to make it so only teacher/internal server can set host?
const setHostReducer: Reducer<pb.ISetHost> = (state, action) => {
  const {
    payload: { id },
  } = action.payload;

  state.host = id;

  return state;
};

const addTrophyReducer: CaseReducer<
  pb.IState,
  PayloadAction<ContextPayload<pb.IAddTrophy>>
> = (state, action) => {
  const participants = state.participants || {};
  const trophy = action.payload.payload;

  let idsToProcess: string[];

  if (trophy.userId) {
    idsToProcess = [trophy.userId];
  } else {
    idsToProcess = Object.keys(participants);
  }

  idsToProcess.forEach((id) => {
    const user = participants[id];
    if (!user) {
      throw new Error(
        `Unable to find user with ID: ${id} in the class participant list`
      );
    }
    const trophies = user.trophies || [];
    if (trophies.length === 0) {
      user.trophies = trophies;
    }
    trophies.push(trophy);
  });

  return state;
};

const setDeviceReducer: Reducer<pb.ISetDevice> = (state, action) => {
  const {
    context: { userId },
    payload: { device, deviceId },
  } = action.payload;
  if (!device) throw new Error('No device was provided');
  if (!deviceId) throw new Error('No device id was provided');
  const { participants } = state;
  const devices = getDevices(userId, participants || {});
  devices[deviceId] = device;

  return state;
};

const removeDeviceReducer: Reducer<pb.IRemoveDevice> = (state, action) => {
  const {
    context: { userId },
    payload: { id },
  } = action.payload;
  if (!id) throw new Error('No device id was provided');

  const { participants } = state;
  const devices = getDevices(userId, participants || {});
  delete devices[id];

  return state;
};

const setWebRtcStreamReducer: Reducer<pb.ISetWebRTCStream> = (
  state,
  action
) => {
  const {
    context: { userId },
    payload: { deviceId, streams },
  } = action.payload;

  const { participants } = state;
  const device = getDevice(userId, deviceId, participants || {});
  device.webRTCStreams = streams;

  return state;
};

const setActivityReducer: Reducer<pb.ISetActivity> = (state, action) => {
  const {
    context: { userId },
    payload: { deviceId, activity },
  } = action.payload;
  const { participants } = state;

  const device = getDevice(userId, deviceId, participants || {});
  device.activity = activity;

  return state;
};

const setContentReducer: Reducer<pb.ISetContent> = (state, action) => {
  const {
    payload: { content },
  } = action.payload;
  state.content = content;

  return state;
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
    setDevice: setDeviceReducer,
    removeDevice: removeDeviceReducer,
    setWebRtcStream: setWebRtcStreamReducer,
    setActivity: setActivityReducer,
    setContent: setContentReducer,
  },
});

export const {
  userJoin,
  userLeave,
  sendChatMessage,
  setHost,
  addTrophy,
  setDevice,
  removeDevice,
  setWebRtcStream,
  setActivity,
  setContent,
} = roomSlice.actions;

export const Actions = roomSlice.actions;

export const roomReducer = roomSlice.reducer;
export const INITIAL_ROOM_STATE = initialState;
export { generateStateDiff } from './diff';
