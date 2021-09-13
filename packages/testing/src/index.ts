import { nanoid } from 'nanoid';
import pb from 'kidsloop-live-serialization';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { Client } from 'kidsloop-live-state';
import WebSocket from 'ws';

const { roomReducer, Actions } = Client;

const HEARTBEAT_INTERVAL = 3500;
const BASE_URL = 'wss://live.kidsloop.dev/api/room';

const url = `${BASE_URL}/b6dc6e0989c42065c1764e96c820b6231c12eed2a48604a9bbe104434bb9a00a`;
const NUMBER_OF_CLIENTS = 50;

const websockets: WebSocket[] = [];
const stores: EnhancedStore[] = [];

for (let i = 0; i < NUMBER_OF_CLIENTS; i++) {
  const store = configureStore({
    middleware: [],
    reducer: {
      room: roomReducer,
    },
  });
  stores.push(store);

  const socket = new WebSocket(url, ['live']);
  socket.binaryType = 'arraybuffer';
  socket.on('open', () => {
    console.log('I OPENED');
    setInterval(() => {
      const message = pb.Action.encode({
        id: nanoid(),
        heartbeat: {},
      }).finish();
      socket.send(message);
    }, HEARTBEAT_INTERVAL);
  });

  socket.on('message', (message) => {
    const data = (message as any).data;
    const bytes = new Uint8Array(data);
    try {
      const { changes } = pb.StateChanges.decode(bytes);
      if (!changes) return;
      changes.forEach((change) => {
        const update = new pb.StateDiff(change);
        // this is required to remove the internal protobuf data
        const tempObject = pb.StateDiff.toObject(update);
        const action = update.action;
        if (!action) return;
        const payload = tempObject[action];
        stores[i].dispatch(Actions[action](payload));
      });
    } catch (_error) {
      try {
        const acknowledgement = pb.ActionAcknowledgement.decode(bytes);
        if (acknowledgement.error) {
          throw new Error(acknowledgement.error);
        }
      } catch (e) {
        console.error('Error: ', e);
      }
    }
  });
  websockets.push(socket);
}

const message = pb.Action.encode({
  id: nanoid(),
  sendChatMessage: {
    message: `Test Message: ${nanoid()}`,
  },
}).finish();

websockets[0].send(message);

const failures: number[] = [];

stores.forEach((store, i) => {
  if (store.getState().room.chatMessages.length < 1) {
    failures.push(i);
  }
});

setTimeout(() => {
  console.log(stores[0].getState().room);
  console.log();
  if (failures.length > 0) {
    console.log(
      `Found that Stores: ${failures.join(', ')} are missing a chat message`
    );
  }
}, HEARTBEAT_INTERVAL);
