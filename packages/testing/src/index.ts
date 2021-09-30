import pb from 'kidsloop-live-serialization';
import { Scenario, SCENARIOS } from './scenarios';
import { diff } from 'deep-object-diff';
import { extent, quantile, mean } from 'simple-statistics';

import { WebsocketClient } from './client';
import { sleep } from './util';
import { Difference, ScenarioTimings, Stats } from './types';

export const BASE_URL = 'wss://live.kidsloop.dev/api/room';
let roomId = '';

export const NUMBER_OF_CLIENTS = 3;

export const CLIENTS: WebsocketClient[] = [];
export let scenarios: Scenario[] = [];
export const scenarioTimings: ScenarioTimings[] = [];
export const failures: Difference[][] = [];

export const DISCONNECTED_CLIENTS = new Set();

export let currentScenario = 0;
let currentState: pb.IState;

async function main() {
  console.log('=== Starting Testing ===');

  await initializeClients();

  await processScenarios();

  const _stats = performStatisticalAnalysis();

  processFailures();

  console.log('=== Finished running scenarios. Tests Passed ===');
  process.exit(0);
}

const initializeClients = async () => {
  for (let i = 0; i < NUMBER_OF_CLIENTS; i++) {
    const ws = new WebsocketClient(i, roomId);
    await ws.setup();
    CLIENTS[i] = ws;

    if (i === 0) {
      while (roomId === '' || roomId === null) {
        await sleep(250);
        roomId = ws.state.roomId || '';
        if (ws.readyState !== undefined && ws.readyState > 1) {
          console.log(`Failed to connect socket ${i}`);
          process.exit(1);
        }
      }
      console.log(`Room ID has been assigned: ${roomId}`);
    } else if (i % 5 === 0) {
      console.log(`Initializing Client ${i}`);
    }

    await sleep(750);
  }

  console.log('=== Initialized websockets ===');
  let attempts = 0;
  let pendingSockets = CLIENTS.filter(({ readyState }) => readyState !== 1)
    .length;
  while (pendingSockets > 0) {
    await sleep(1000); // Give the connections a chance to connect
    attempts += 1;
    pendingSockets = CLIENTS.filter(({ readyState }) => readyState !== 1)
      .length;
    console.log(`Waiting for ${pendingSockets} websockets to connect`);
    if (attempts > 5) throw new Error('Unable to get all websockets connected');
  }
};

const processScenarios = async () => {
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
};

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
    if (typeof target === 'number') {
      if (target === -1) {
        CLIENTS.forEach((socket) => {
          socket.send(bytes);
        });
      } else {
        CLIENTS[target].send(bytes);
      }
    } else {
      target.forEach((idx) => {
        CLIENTS[idx].send(bytes);
      });
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
const runAssertions = ({
  expected,
  ignoreAssertions,
  target,
}: Scenario): void => {
  for (let i = 0; i < CLIENTS.length; i++) {
    if (
      (ignoreAssertions &&
        (i === target || (Array.isArray(target) && target.includes(i)))) ||
      DISCONNECTED_CLIENTS.has(i)
    )
      continue;
    if (i === 0) currentState = { ...CLIENTS[0].state };

    const socketState = CLIENTS[i].state;
    const difference = diff(currentState, socketState);
    const assertions = expected ? expected(socketState) : [];

    if (Object.keys(difference).length > 0 || assertions.length > 0) {
      if (!failures[currentScenario]) failures[currentScenario] = [];
      failures[currentScenario].push({ socket: i, difference, assertions });
    }
  }
};

const performStatisticalAnalysis = (): Stats[] => {
  console.log();
  console.log('=== Statistics (in milliseconds) ===');
  const statResults: Stats[] = [];
  for (let i = 0; i < scenarios.length; i++) {
    const { name } = scenarios[i];
    const scenarioResults = CLIENTS.flatMap(
      (socket) => socket.results[i].time
    ).filter((result) => typeof result === 'number' && !isNaN(result));
    const [min, max] = extent(scenarioResults);
    const p95 = quantile(scenarioResults, 0.95);
    const avg = mean(scenarioResults);
    statResults.push({
      name,
      scenario: i,
      min,
      max,
      p95,
      mean: avg,
    });
  }
  console.log(statResults);
  console.log();
  return statResults;
};

const processFailures = () => {
  let hasFailed = false;
  for (let i = 0; i < failures.length; i++) {
    const fails = failures[i];
    if (fails?.length > 0) {
      console.log();
      console.log(`Scenario ${i} '${scenarios[i].name}' had failures:`);
      console.log(fails);
      hasFailed = true;
    }
  }
  if (hasFailed) process.exit(1);
};

main();
