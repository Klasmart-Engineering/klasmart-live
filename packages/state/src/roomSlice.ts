import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Map } from 'immutable';
import {
  Message, Participant, ChatMessage, TrophyMessage,
} from './state';
import { ID, ContextPayload, Context } from './store';
import {
  IState,
  IParticipant,
  IChatMessage,
  IAppendChatMessage,
  IUserJoin,
  ISetHost,
  ISetDevice,
  IUserLeave,
  ISetWebRTCStream,
  ISetActivityStream,
  IDevice,
  ISendChatMessage,
  ISetContent,
  IAddTrophy,
} from '../../serialization/src/protobuf';

type Reducer<T> = CaseReducer<IState, PayloadAction<ContextPayload<T>>>;

const initialState: IState = {
  participants: {},
  host: null,
  chatMessages: [],
};

const userJoinReducer: Reducer<IUserJoin> = (state, action) => {
  const {
    context: { userId, name },
  } = action.payload;
  const { participants } = state;

  const participant: IParticipant = {
    name,
    devices: [],
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
        `Unable to find user with ID: ${id} in the class participant list`,
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
    payload: { device },
  } = action.payload;
  if (!device) throw new Error('No device was provided');
  const { participants } = state;
  const devices = getDevices(userId, participants!);
  const index = findIndex((d) => d.id === device.id, devices);
  if (index >= 0) {
    devices![index] = device;
  } else {
    devices!.push(device);
  }

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
  action,
) => {
  const {
    context: { userId },
    payload: { deviceId, activityId, activityStreamId },
  } = action.payload;
  const { participants } = state;

  const device = getDevice(userId, deviceId, participants!);
  device.activityId = activityId;
  device.activityStreamId = activityStreamId;

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
  name: 'room',
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

export const roomReducer = roomSlice.reducer;

/**
 * A helper function to find whether or not an element of an array
 * exists within that array given the comparator function.
 *
 * This is just a shorthand to handle all the conditional logic
 */
function findIndex<T>(cmp: (type: T) => boolean, arr?: T[] | null): number {
  if (!arr) return -1;
  let index = arr.findIndex(cmp);
  if (index === undefined) index = -1;
  return index;
}

/**
 * Fetches the devices for a given user
 */
function getDevices(
  userId: ID,
  participants: { [k: string]: IParticipant },
): IDevice[] {
  const user = participants![userId];
  if (!user) {
    throw new Error(
      `Unable to find user with ID: ${userId} in the class participant list`,
    );
  }
  if (!user.devices) {
    user.devices = [];
  }

  return user.devices;
}

/**
 * Attempts to find the device with the given DeviceID for that user
 */
function getDevice(
  userId: ID,
  deviceId: string | null | undefined,
  participants: { [k: string]: IParticipant },
): IDevice {
  if (!deviceId) throw new Error('No device ID was provided');

  const devices = getDevices(userId, participants);

  const index = findIndex((d) => d.id === deviceId, devices);
  if (index < 0) {
    throw new Error(
      `Unable to find Device ID: '${deviceId}' in registered devices for user ${userId}`,
    );
  }
  return devices![index];
}
