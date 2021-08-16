import { expect } from 'chai';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Context, ContextPayload, ID } from '../../src/store';
import {
  addTrophy,
  roomReducer,
  sendChatMessage,
  setHost,
  userJoin,
  userLeave,
  UserPayload,
} from '../../src/roomSlice';
import {
  Participant,
  Message,
  ChatMessage,
  TrophyMessage,
} from '../../src/state';

describe('Store Actions', () => {
  let store: EnhancedStore;
  let context: Context;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        room: roomReducer,
      },
    });
    context = {
      userId: '1234',
      isTeacher: false,
    };
  });

  it('userJoin allows a user to join the room', () => {
    const user = new Participant('1234', 'Bob');
    const dummy: ContextPayload<UserPayload> = {
      context,
      payload: {
        participant: user,
        id: '1234',
      },
    };

    store.dispatch(userJoin(dummy));
    const { participants } = store.getState().room;
    expect(Object.keys(participants)).lengthOf(1);
    expect(participants['1234']).eq(user);
  });

  it('userLeave allows a user to leave the room', () => {
    const user = new Participant('1234', 'Bob');
    const dummy: ContextPayload<UserPayload> = {
      context,
      payload: {
        participant: user,
        id: '1234',
      },
    };

    store.dispatch(userJoin(dummy));

    let { participants } = store.getState().room;
    expect(Object.keys(participants)).lengthOf(1);
    expect(participants['1234']).eq(user);

    store.dispatch(userLeave(dummy.context));

    participants = store.getState().room.participants;
    expect(Object.keys(participants)).lengthOf(0);
    expect(participants['1234']).eq(undefined);
  });

  it('sendChatMessage allows a user to post a message', () => {
    const payload = {
      message: 'Test Mesage',
      timestamp: Date.now(),
    };
    const action: ContextPayload<ChatMessage> = {
      context,
      payload,
    };

    store.dispatch(sendChatMessage(action));
    const { chat } = store.getState().room;
    expect(chat).lengthOf(1);
    expect(chat[0]).eql({ ...payload, userId: context.userId });
  });

  it('setHost allows a user set a host', () => {
    const action: ContextPayload<ID> = {
      context,
      payload: '12345',
    };

    store.dispatch(setHost(action));
    const { host } = store.getState().room;
    expect(host).eq('12345');
  });

  it('addTrophy allows a trophy to be added to a single user', () => {
    const user = addSampleUserToStore(store, context).next().value;
    addSampleUserToStore(store, context).next();

    const action: ContextPayload<TrophyMessage> = {
      context,
      payload: {
        trophy: 'Trophy 1',
        user: user.id,
        timestamp: Date.now(),
      },
    };

    store.dispatch(addTrophy(action));
    const { participants } = store.getState().room;
    expect(Object.keys(participants)).lengthOf(2);
    expect(participants[user.id].trophies).lengthOf(1);
    expect(
      (Object.values(participants) as Participant[]).filter(
        (u: Participant) => u.id !== user.id,
      )[0].trophies,
    ).lengthOf(0);
  });

  it('addTrophy adds a trophy to the whole class if user is unspecified', () => {
    addSampleUserToStore(store, context).next().value;
    addSampleUserToStore(store, context).next();

    const action: ContextPayload<TrophyMessage> = {
      context,
      payload: {
        trophy: 'Trophy 1',
        timestamp: Date.now(),
      },
    };

    store.dispatch(addTrophy(action));
    const { participants } = store.getState().room;

    expect(Object.keys(participants)).lengthOf(2);
    (Object.values(participants) as Participant[]).forEach((participant) => {
      expect(participant.trophies).lengthOf(1);
    });
  });
});

function* addSampleUserToStore(
  store: EnhancedStore,
  context: Context,
): Generator<Participant> {
  let id = 0;
  const uuid = uuidv4();
  const user = new Participant(uuid, `Test User ${(id += 1)}`);
  const payload: ContextPayload<UserPayload> = {
    context: {
      ...context,
      userId: uuid,
    },
    payload: {
      participant: user,
      id: '1234',
    },
  };

  store.dispatch(userJoin(payload));
  yield user;
}
