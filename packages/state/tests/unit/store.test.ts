import { expect } from 'chai';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { Context, ContextPayload, ID } from '../../src/store';
import {
  roomReducer,
  sendChatMessage,
  setHost,
  userJoin,
  userLeave,
  UserPayload,
} from '../../src/roomSlice';
import { Participant, Message, ChatMessage } from '../../src/state';

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
    const { students } = store.getState().room;
    expect(Object.keys(students)).lengthOf(1);
    expect(students['1234']).eq(user);
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

    let { students } = store.getState().room;
    expect(Object.keys(students)).lengthOf(1);
    expect(students['1234']).eq(user);

    store.dispatch(userLeave(dummy.context));

    students = store.getState().room.students;
    expect(Object.keys(students)).lengthOf(0);
    expect(students['1234']).eq(undefined);
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
});
