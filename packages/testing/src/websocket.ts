import pb from 'kidsloop-live-serialization';
import { v4 as uuid } from 'uuid';
import WebSocket from 'ws';
import { Client } from 'kidsloop-live-state';

import {
  stores,
  currentScenario,
  results,
  scenarioTimings,
  BASE_URL,
} from './index';
import { generateToken, JWT } from './auth';

const { Actions } = Client;

const HEARTBEAT_INTERVAL = 3500;

export async function createWebsocket(
  i: number,
  roomid: string
): Promise<{ token: JWT; ws: WebSocket }> {
  const url = `${BASE_URL}/${roomid}`;
  const { token, jwt } = await generateToken(roomid, i);
  const socket = new WebSocket(url, ['live'], {
    headers: {
      Authorization: `Bearer ${jwt}`,
      'CF-Access-Client-Id': process.env.CF_CLIENT_ID,
      'CF-Access-Client-Secret': process.env.CF_CLIENT_SECRET,
    },
  });
  socket.binaryType = 'arraybuffer';
  socket.addEventListener('open', () => {
    setInterval(() => {
      const message = pb.Action.encode({
        id: uuid(),
        heartbeat: {},
      }).finish();
      socket.send(message);
    }, HEARTBEAT_INTERVAL);
  });

  socket.addEventListener('message', ({ data }) => {
    const bytes = new Uint8Array(data);
    try {
      const { changes } = pb.StateChanges.decode(bytes);
      if (!changes) return;
      for (const change of changes) {
        const update = new pb.StateDiff(change);
        // this is required to remove the internal protobuf data
        const tempObject = pb.StateDiff.toObject(update);
        const action = update.action;
        if (!action) continue;

        const payload = tempObject[action];
        stores[i].dispatch(Actions[action](payload));

        if (results[i] === undefined) results[i] = [];
        results[i][currentScenario] = {
          scenario: currentScenario,
          name: scenarioTimings[currentScenario].name,
          time: new Date().getTime() - scenarioTimings[currentScenario].time,
        };
      }
    } catch (e) {}
  });
  socket.addEventListener('error', (error) => {
    console.error('Error connecting to websocket:', error);
  });
  return { token, ws: socket };
}
