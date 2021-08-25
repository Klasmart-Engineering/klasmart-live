import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {
  IParticipant,
  ISendChatMessage,
  ISetActivityStream,
  ISetContent,
  ISetDevice,
  ISetHost,
  ISetWebRTCStream,
  IUserJoin,
  IAddTrophy,
  ContentType,
} from "kidsloop-live-serialization";
import { Context, ContextPayload, ID } from "../store";
import {
  addTrophy,
  roomReducer,
  sendChatMessage,
  setActivityStream,
  setDevice,
  setHost,
  setWebRtcStream,
  userJoin,
  setContent,
  userLeave,
} from ".";

describe("Store Actions", () => {
  let store: EnhancedStore;
  let context: Context;

  beforeEach(() => {
    store = configureStore({
      middleware: [],
      reducer: {
        room: roomReducer,
      },
    });
    context = {
      userId: uuidv4(),
      name: "Test User",
      isTeacher: false,
    };
  });

  it("userJoin allows a user to join the room", () => {
    const user: IParticipant = {
      name: context.name,
      devices: [],
      trophies: [],
    };
    const dummy: ContextPayload<IUserJoin> = {
      context,
      payload: {},
    };

    store.dispatch(userJoin(dummy));
    const { participants } = store.getState().room;
    expect(Object.keys(participants)).toHaveLength(1);
    expect(participants[context.userId]).toEqual(user);
  });

  it("userLeave allows a user to leave the room", () => {
    const user: IParticipant = {
      name: context.name,
      devices: [],
      trophies: [],
    };
    const action = {
      context,
      payload: {},
    };

    store.dispatch(userJoin(action));

    let { participants } = store.getState().room;
    expect(Object.keys(participants)).toHaveLength(1);
    expect(participants[context.userId]).toEqual(user);

    store.dispatch(userLeave(action));

    participants = store.getState().room.participants;
    expect(Object.keys(participants)).toHaveLength(0);
    expect(participants[context.userId]).toBeUndefined();
  });

  it("sendChatMessage allows a user to post a message", () => {
    const payload = {
      message: "Test Message",
    };
    const action: ContextPayload<ISendChatMessage> = {
      context,
      payload,
    };

    store.dispatch(sendChatMessage(action));
    const { chatMessages } = store.getState().room;
    expect(chatMessages).toHaveLength(1);
    expect(chatMessages[0]).toEqual(
      expect.objectContaining({
        message: payload.message,
        fromUser: context.userId,
        timestamp: expect.any(Number),
      })
    );
  });

  it("setHost allows a user set a host", () => {
    const action: ContextPayload<ISetHost> = {
      context,
      payload: {
        id: "12345",
      },
    };

    store.dispatch(setHost(action));
    const { host } = store.getState().room;
    expect(host).toEqual("12345");
  });

  it("addTrophy allows a trophy to be added to a single user", () => {
    const [id, _user] = addSampleUserToStore(store, context).next().value;
    const [id2, _user2] = addSampleUserToStore(store, context).next().value;

    const action: ContextPayload<IAddTrophy> = {
      context,
      payload: {
        trophyId: "Trophy 1",
        userId: id,
        timestamp: Date.now(),
      },
    };

    store.dispatch(addTrophy(action));
    const { participants } = store.getState().room;
    expect(Object.keys(participants)).toHaveLength(2);
    expect(participants[id].trophies).toHaveLength(1);
    expect(participants[id2].trophies).toHaveLength(0);
  });

  it("addTrophy adds a trophy to the whole class if user is unspecified", () => {
    addUsersToStore(store, context, 2);

    const action: ContextPayload<IAddTrophy> = {
      context,
      payload: {
        trophyId: "Trophy 1",
        timestamp: Date.now(),
      },
    };

    store.dispatch(addTrophy(action));
    const { participants } = store.getState().room;

    expect(Object.keys(participants)).toHaveLength(2);
    (Object.values(participants) as IParticipant[]).forEach((participant) => {
      expect(participant.trophies).toHaveLength(1);
    });
  });

  it("setDevice allows a user to set a device", () => {
    const [id, user] = addSampleUserToStore(store, context).next().value;
    context.userId = id;
    context.name = user.name;

    const action: ContextPayload<ISetDevice> = {
      context,
      payload: {
        device: {
          id: "Test Device ID",
          activityId: "Test Activity ID",
          activityStreamId: "Test Activity Stream ID",
          webRTCStreams: [
            {
              id: "Test Web RTC Stream",
              label: "Test Label",
              tracks: [
                {
                  id: "Test Video",
                  sfu: "sfu.1.com",
                },
              ],
            },
          ],
        },
      },
    };

    store.dispatch(setDevice(action));
    const { participants } = store.getState().room;
    const { devices } = participants[id];
    expect(devices).toHaveLength(2);
    expect(devices[1]).toBe(action.payload.device);
  });

  it("setDevice overwrites an already existing device", () => {
    const [id, user] = addSampleUserToStore(store, context).next().value;
    context.userId = id;
    context.name = user.name;

    const action: ContextPayload<ISetDevice> = {
      context,
      payload: {
        device: {
          id: "Test Device ID Default",
          activityId: "Test Activity ID",
          activityStreamId: "Test Activity Stream ID",
          webRTCStreams: [
            {
              id: "Test Web RTC Stream",
              label: "Test Label",
              tracks: [
                {
                  id: "Test Video",
                  sfu: "sfu.1.com",
                },
              ],
            },
          ],
        },
      },
    };

    store.dispatch(setDevice(action));
    const { participants } = store.getState().room;
    const { devices } = participants[id];
    expect(devices).toHaveLength(1);
    expect(devices[0]).toBe(action.payload.device);
  });

  it("setDevice allows a user to set a new web RTC streams for a device", () => {
    const [id, user] = addSampleUserToStore(store, context).next().value;
    context.userId = id;
    context.name = user.name;

    const action: ContextPayload<ISetWebRTCStream> = {
      context,
      payload: {
        deviceId: "Test Device ID Default",
        streams: [
          {
            id: "Test Web RTC Stream Video",
            label: "Test Label Video",
            tracks: [
              {
                id: "Test Video",
                sfu: "sfu.1.com/video",
              },
            ],
          },
          {
            id: "Test Web RTC Stream Audio",
            label: "Test Label Audio",
            tracks: [
              {
                id: "Test Audio",
                sfu: "sfu.1.com/audio",
              },
            ],
          },
        ],
      },
    };

    store.dispatch(setWebRtcStream(action));
    const { participants } = store.getState().room;
    const { devices } = participants[id];
    expect(devices).toHaveLength(1);
    expect(devices[0].webRTCStreams).toBe(action.payload.streams);
  });

  it("setActivityStream allows a user to set a new activity stream for a device", () => {
    const [id, user] = addSampleUserToStore(store, context).next().value;
    context.userId = id;
    context.name = user.name;

    const action: ContextPayload<ISetActivityStream> = {
      context,
      payload: {
        deviceId: "Test Device ID Default",
        activityId: "New Activity",
        activityStreamId: uuidv4(),
      },
    };

    store.dispatch(setActivityStream(action));
    const { participants } = store.getState().room;
    const { devices } = participants[id];
    expect(devices).toHaveLength(1);
    expect(devices[0].activityId).toBe(action.payload.activityId);
    expect(devices[0].activityStreamId).toBe(action.payload.activityStreamId);
  });

  it("setContent allows a user to set the room content", () => {
    const [id, user] = addSampleUserToStore(store, context).next().value;
    context.userId = id;
    context.name = user.name;

    const action: ContextPayload<ISetContent> = {
      context,
      payload: {
        content: {
          type: ContentType.H5P,
          id: "Test H5P Activity",
          url: "test.activity.com/h5p",
        },
      },
    };

    let { content } = store.getState().room;
    expect(content).toBe(ContentType.Blank);
    store.dispatch(setContent(action));
    content = store.getState().room.content;
    expect(content).toBe(action.payload.content);
  });
});

function addUsersToStore(
  store: EnhancedStore,
  context: Context,
  numberOfUsers: number
): [ID, IParticipant][] {
  const users = [];
  for (let i = 0; i < numberOfUsers; i += 1) {
    users.push(addSampleUserToStore(store, context).next().value);
  }
  return users;
}

function* addSampleUserToStore(
  store: EnhancedStore,
  context: Context
): Generator<[ID, IParticipant]> {
  const id = uuidv4();
  const name = `Sample User ${id.substr(0, 5)}`;
  const user: IParticipant = {
    name,
    devices: [
      {
        id: "Test Device ID Default",
        activityId: "Test Activity ID Default",
        activityStreamId: "Test Activity Stream ID Default",
        webRTCStreams: [
          {
            id: "Test Web RTC Stream Default",
            label: "Test Label Default",
            tracks: [
              {
                id: "Test Video Default",
                sfu: "sfu.1.com/default",
              },
            ],
          },
        ],
      },
    ],
    trophies: [],
  };
  const ctx = {
    ...context,
    userId: id,
    name,
  };
  const join: ContextPayload<IUserJoin> = {
    context: ctx,
    payload: {},
  };

  store.dispatch(userJoin(join));

  const device: ContextPayload<ISetDevice> = {
    context: ctx,
    payload: {
      device: user.devices![0],
    },
  };

  store.dispatch(setDevice(device));
  yield [id, user];
}
