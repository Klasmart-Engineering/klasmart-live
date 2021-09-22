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
      'CF-Access-Client-Id': '8e19dcadfebf0845b3b558f360082dea.access',
      'CF-Access-Client-Secret':
        'b0c2e2a5d206276fe5c7c02fa6581cf2c701ffb03d3c3dd3c1f186ce1144c507',
      Cookie:
        'CF_Authorization=eyJhbGciOiJSUzI1NiIsImtpZCI6IjZjM2JmZmVmNzFiYjBhOTBjOWNiZWYzYjdjMGQ0YTFjN2I0YjhiNzZiODAyOTJhNjIzYWZkOWRhYzQ1ZDFjNjUifQ.eyJhdWQiOlsiYWY5NzU4NDFmOThhZDg3ZTgzZmFkMTBlZjhhZTU2ODc2ZTQzMzA5Y2VhNjdlMDRhNDcyMmZlYjk5ZmFlYzFjYyJdLCJlbWFpbCI6Im5jdXJ0aXNAa2lkc2xvb3AubGl2ZSIsImV4cCI6MTYzMjMxNzUxNSwiaWF0IjoxNjMyMjMxMTE1LCJuYmYiOjE2MzIyMzExMTUsImlzcyI6Imh0dHBzOi8va2lkc2xvb3AuY2xvdWRmbGFyZWFjY2Vzcy5jb20iLCJ0eXBlIjoiYXBwIiwiaWRlbnRpdHlfbm9uY2UiOiJsbWRxSHlaSEdEaTJhZ1BOIiwic3ViIjoiMTVjNTI4MTItMzQwNi00NWRlLWEwYTEtZTliMzQ4NWY3OWUzIiwiY291bnRyeSI6IkdCIn0.lIDXZit2fX0Y6AxApslC53kO2KaOiBrZUnLMjM7O4F6ND3Qj1TY6tGPS3rdd_l1FLcDTAo5FWJoA6m6PGGKq1d6LYRKEV97-hwn78tpn2mJE4hB6AbsT840Vyyphti-iCNb7NW35-vSM7-1rjyRrO7UbRc3bQ5nPtskpvbSs_Yrzb2GLpIHnHvp3bMZxbeYdNzhkxLAHJkS-pYvQaVS-NIY8vblWYtqR2oe-I1Ts90xuAKFz5W53u0V6rQNBhDwEvuAZSPr2WHAd7VDm0mmS46veOOHjPkFQfZsBYF7Dy9a0kKU2NGJVaOTpth93PdSsbIFp-7Tsv8vdqUmOaJnBDw',
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
