import { nanoid } from 'nanoid';
import pb from 'kidsloop-live-serialization';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { Client } from 'kidsloop-live-state';
import WebSocket from 'ws';
import { Scenario, SCENARIOS } from './scenarios';
import { diff } from 'deep-object-diff';
import type Chai from 'chai';

const { roomReducer, Actions } = Client;

const HEARTBEAT_INTERVAL = 3500;
const BASE_URL = 'wss://live.kidsloop.dev/api/room';
const NUMBER_OF_CLIENTS = 2;

let url = `${BASE_URL}/`;

const websockets: WebSocket[] = [];
const stores: EnhancedStore[] = [];
const scenarios: Scenario[] = [...SCENARIOS];
const scenarioTimings: ScenarioTimings[] = [];
const results: Result[][] = [];
const failures: Difference[][] = [];

let currentScenario = 0;
let currentState: pb.IState;

async function createWebsocket(i: number): Promise<WebSocket> {
  const socket = new WebSocket(url, ['live'], {
    headers: {
      Cookie:
        'CF_Authorization=eyJhbGciOiJSUzI1NiIsImtpZCI6IjZjM2JmZmVmNzFiYjBhOTBjOWNiZWYzYjdjMGQ0YTFjN2I0YjhiNzZiODAyOTJhNjIzYWZkOWRhYzQ1ZDFjNjUifQ.eyJhdWQiOlsiYWY5NzU4NDFmOThhZDg3ZTgzZmFkMTBlZjhhZTU2ODc2ZTQzMzA5Y2VhNjdlMDRhNDcyMmZlYjk5ZmFlYzFjYyJdLCJlbWFpbCI6Im5jdXJ0aXNAa2lkc2xvb3AubGl2ZSIsImV4cCI6MTYzMTgxMTkxMywiaWF0IjoxNjMxNzI1NTEzLCJuYmYiOjE2MzE3MjU1MTMsImlzcyI6Imh0dHBzOi8va2lkc2xvb3AuY2xvdWRmbGFyZWFjY2Vzcy5jb20iLCJ0eXBlIjoiYXBwIiwiaWRlbnRpdHlfbm9uY2UiOiJoSnlLRHVEaVI2SFFkM2NQIiwic3ViIjoiMTVjNTI4MTItMzQwNi00NWRlLWEwYTEtZTliMzQ4NWY3OWUzIiwiY291bnRyeSI6IkdCIn0.UydOvAXcEZOsPT7WkmgDwPnvDgSo5vSwrp0LJsu_QHd7vuDQkgRNajcjczhx1jDdxwLrGgcj5Cce_TafW3ycLT-veN3DZCGOdZ3Kj3KRmZhPCTmVPNoZ3kU0gSjNB0ys5pc1ViPcJElRTdg2Z_QeZ_uaevzMWMs_AhyT7KEGJq73TF-gYzeV5CND4cLBTu5In783K-e7AmVlEBWIem9yxuNz_50bJMOhKU8fGYB6AnTTfnFZr9_k4o6Io77HkfKfx8aWimt5Fx31dwnGI-2LDWdy-rvcs1eKF-DGqEbgvchzbLLnhF5oZb7KU1-9O4R2EVczfCuhjfwThT66IckOTA',
    },
  });
  socket.binaryType = 'arraybuffer';
  socket.addEventListener('open', () => {
    setInterval(() => {
      const message = pb.Action.encode({
        id: nanoid(),
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
  return socket;
}

async function main() {
  console.log('=== Starting Testing ===');
  for (let i = 0; i < NUMBER_OF_CLIENTS; i++) {
    const store = configureStore({
      middleware: [],
      reducer: {
        room: roomReducer,
      },
    });
    stores.push(store);

    const socket = await createWebsocket(i);
    websockets.push(socket);

    if (i === 0) {
      let roomId = undefined;
      while (roomId === undefined || roomId === null) {
        await sleep(250);
        roomId = stores[i].getState().room.roomId;
      }
      console.log(`Room ID has been assigned: ${roomId}`);
      url += roomId;
    }
  }

  console.log('=== Initialized websockets ===');
  let attempts = 0;
  while (websockets.filter((socket) => socket.readyState !== 1).length > 0) {
    await sleep(500); // Give the connections a chance to connect
    attempts += 1;
    if (attempts > 5) throw new Error('Unable to get all websockets connected');
  }
  console.log('=== Starting Scenarios ===');

  for (currentScenario; currentScenario < scenarios.length; currentScenario++) {
    const scenario = scenarios[currentScenario];
    processScenario(scenario);
    if (scenario.delay) await sleep(scenario.delay);
    runAssertions(scenario);
  }

  let hasFailed = false;
  for (let i = 0; i < failures.length; i++) {
    const fails = failures[i];
    if (fails.length > 0) {
      console.log();
      console.log(
        `Scenario '${scenarios[i].name}': had failures from sockets:`
      );
      console.log(fails);
      hasFailed = true;
    }
  }
  if (hasFailed) process.exit(1);

  console.log('=== Finished running scenarios. Tests Passed ===');
  process.exit(0);
}

const processScenario = async ({
  name,
  action,
  target,
  before,
  after,
}: Scenario): Promise<void> => {
  if (before !== undefined) await before();
  if (action) {
    const bytes = pb.Action.encode(action).finish();
    if (target === -1) {
      websockets.forEach((socket) => {
        socket.send(bytes);
      });
    } else if (target === -2) {
      const i = Math.floor(Math.random() * NUMBER_OF_CLIENTS);
      websockets[i].send(bytes);
    } else {
      websockets[target].send(action);
    }
  }
  scenarioTimings.push({ name: name, time: new Date().getTime() });
  if (after !== undefined) await after();
};

/**
 * This function is alittle tricky, as there are
 * potential re-connection events etc. that could happen
 * between device scenarios. There's not always going to
 * be a single message being sent to each client for each
 * scenario
 *
 * As such, this function takes the first sockets room state
 * as the base for the assertion
 */
const runAssertions = ({ expected }: Scenario): void => {
  for (let i = 0; i < websockets.length; i++) {
    if (i === 0) {
      currentState = {
        ...stores[i].getState().room,
        ...expected,
      };
    }
    const socketState = stores[i].getState().room;
    const difference = diff(currentState, socketState);
    const assertions = expected ? expected(socketState) : [];

    if (Object.keys(difference).length > 0 || assertions.length > 0) {
      if (!failures[currentScenario]) failures[currentScenario] = [];
      failures[currentScenario].push({ socket: i, difference, assertions });
    }
  }
};

async function sleep(ms: number): Promise<null> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface ScenarioTimings {
  name: string;
  time: number;
}

interface Difference {
  socket: number;
  difference: { [k: string]: any };
  assertions: Chai.Assertion[];
}

interface Result {
  name: string;
  time: number;
}

main();
