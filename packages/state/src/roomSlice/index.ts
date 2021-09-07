import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IState,
  IParticipant,
  IChatMessage,
  IUserJoin,
  ISetHost,
  ISetDevice,
  IUserLeave,
  ISetWebRTCStream,
  ISetActivityStream,
  ISendChatMessage,
  ISetContent,
  IAddTrophy,
  ContentType,
} from "kidsloop-live-serialization";
import { ContextPayload } from "../store";
import { getDevice, getDevices } from "./util";

type Reducer<T> = CaseReducer<IState, PayloadAction<ContextPayload<T>>>;

const initialState: IState = {
  participants: {},
  host: null,
  chatMessages: [],
  content: ContentType.Blank,
  endTimestamp: null,
};

const userJoinReducer: Reducer<IUserJoin> = (state, action) => {
  const {
    context: { userId, name },
  } = action.payload;
  const { participants } = state;

  const participant: IParticipant = {
    name,
    devices: {},
    trophies: [],
  };

  participants![userId] = participant;
  return state;
};

const userLeaveReducer: Reducer<IUserLeave> = (state, action) => {
  const {
    context: { userId },
  } = action.payload;

  const { participants } = state;
  delete participants![userId];

  return state;
};

const sendChatMessageReducer: Reducer<ISendChatMessage> = (state, action) => {
  const {
    context: { userId },
    payload: { message },
  } = action.payload;
  if (!message || message.length === 0) return state;

  const msg: IChatMessage = {
    fromUser: userId,
    message,
    timestamp: Date.now(),
  };
  state.chatMessages!.push(msg);

  return state;
};

// @TODO - Probably want to make it so only teacher/internal server can set host?
const setHostReducer: Reducer<ISetHost> = (state, action) => {
  const {
    payload: { id },
  } = action.payload;

  state.host = id;

  return state;
};

const addTrophyReducer: CaseReducer<
  IState,
  PayloadAction<ContextPayload<IAddTrophy>>
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

const setDeviceReducer: Reducer<ISetDevice> = (state, action) => {
  const {
    context: { userId },
    payload: { device, deviceId },
  } = action.payload;
  if (!device) throw new Error("No device was provided");
  if (!deviceId) throw new Error("No device id was provided");
  const { participants } = state;
  const devices = getDevices(userId, participants!);
  devices[deviceId] = device;

  return state;
};

const setWebRtcStreamReducer: Reducer<ISetWebRTCStream> = (state, action) => {
  const {
    context: { userId },
    payload: { deviceId, streams },
  } = action.payload;

  const { participants } = state;
  const device = getDevice(userId, deviceId, participants!);
  device.webRTCStreams = streams;

  return state;
};

const setActivityStreamReducer: Reducer<ISetActivityStream> = (
  state,
  action
) => {
  const {
    context: { userId },
    payload: { deviceId, activityId, activityStreamId },
  } = action.payload;
  const { participants } = state;

  const device = getDevice(userId, deviceId, participants!);
  const activity = {
    id: activityId,
    streamId: activityStreamId
  }
  device.activity = activity;

  return state;
};

const setContentReducer: Reducer<ISetContent> = (state, action) => {
  const {
    payload: { content },
  } = action.payload;
  state.content = content;

  return state;
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    userJoin: userJoinReducer,
    userLeave: userLeaveReducer,
    sendChatMessage: sendChatMessageReducer,
    setHost: setHostReducer,
    addTrophy: addTrophyReducer,
    setDevice: setDeviceReducer,
    setWebRtcStream: setWebRtcStreamReducer,
    setActivityStream: setActivityStreamReducer,
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
  setWebRtcStream,
  setActivityStream,
  setContent,
} = roomSlice.actions;

export const Actions = roomSlice.actions;

export const roomReducer = roomSlice.reducer;
export { generateStateDiff } from './diff';