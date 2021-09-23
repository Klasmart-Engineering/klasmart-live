import pb from 'kidsloop-live-serialization';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { Client } from 'kidsloop-live-state';
import WebSocket from 'ws';
import { Scenario, SCENARIOS } from './scenarios';
import { diff } from 'deep-object-diff';
import type Chai from 'chai';

import { createWebsocket } from './websocket';
import { JWT } from './auth';

const { roomReducer } = Client;

export const BASE_URL = 'wss://live.kidsloop.dev/api/room';
export const NUMBER_OF_CLIENTS = 1;

let roomId = '';

export const tokens: JWT[] = [];
export const websockets: WebSocket[] = [];
export const stores: EnhancedStore[] = [];
export let scenarios: Scenario[] = [];
export const scenarioTimings: ScenarioTimings[] = [];
export const results: Result[][] = [];
export const failures: Difference[][] = [];

export let currentScenario = 0;
let currentState: pb.IState;

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

    const { token, ws } = await createWebsocket(i, roomId);
    websockets.push(ws);
    tokens.push(token);

    if (i === 0) {
      while (roomId === '') {
        await sleep(250);
        roomId = stores[i].getState().room.roomId;
      }
      console.log(`Room ID has been assigned: ${roomId}`);
      roomId += roomId;
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
  // Initialize senarios
  scenarios = [...SCENARIOS.map((scenario) => scenario())];

  for (currentScenario; currentScenario < scenarios.length; currentScenario++) {
    const scenario = scenarios[currentScenario];
    console.log(`Running scenario ${currentScenario}: ${scenario.name}`);
    processScenario(scenario);
    if (scenario.delay) await sleep(scenario.delay);
    runAssertions(scenario);
  }

  console.log('=== Finished Scenarios ===');

  let hasFailed = false;
  for (let i = 0; i < failures.length; i++) {
    const fails = failures[i];
    if (fails.length > 0) {
      console.log();
      console.log(`Scenario ${i} '${scenarios[i].name}' had failures:`);
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
    } else {
      websockets[target].send(bytes);
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
