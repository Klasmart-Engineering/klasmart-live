import pb from 'kidsloop-live-serialization';
import { diff } from 'deep-object-diff';
import { extent, quantile, mean } from 'simple-statistics';

import { WebsocketClient } from './client';
import { sleep } from './util';
import { Context, Difference, Stats } from './types';
import { Scenario, SCENARIOS } from './scenarios';

export const BASE_URL = 'wss://live.kidsloop.dev/api/room';
export const NUMBER_OF_CLIENTS = [3];

async function main() {
  console.log('=== Starting Testing ===');
  for (const numOfClients of NUMBER_OF_CLIENTS) {
    console.log(`=== Starting Scenario with ${numOfClients} clients ===`);
    const context: Context = {
      clients: [],
      disconnectedClients: new Set<number>(),
      scenarios: [],
      scenarioTimings: [],
      currentScenario: 0,
    };

    await initializeClients(numOfClients, context);

    const failures = await processScenarios(context);

    const stats = performStatisticalAnalysis(context);

    processFailures(context, failures);
    console.log(`=== Finished Scenario with ${numOfClients} clients ===`);
  }

  console.log('=== Finished running all scenarios. Tests Passed ===');
  process.exit(0);
}

const initializeClients = async (numOfClients: number, context: Context) => {
  let roomId = '';
  const { clients } = context;
  for (let i = 0; i < numOfClients; i++) {
    const ws = new WebsocketClient(i, roomId, context);
    await ws.setup();
    clients[i] = ws;

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
  let pendingSockets = clients.filter(({ readyState }) => readyState !== 1)
    .length;
  while (pendingSockets > 0) {
    await sleep(1000); // Give the connections a chance to connect
    attempts += 1;
    pendingSockets = clients.filter(({ readyState }) => readyState !== 1)
      .length;
    console.log(`Waiting for ${pendingSockets} websockets to connect`);
    if (attempts > 5) throw new Error('Unable to get all websockets connected');
  }
};

const processScenarios = async (context: Context): Promise<Difference[][]> => {
  console.log('=== Starting Scenarios ===');
  // Initialize senarios
  context.scenarios = [...SCENARIOS.map((scenario) => scenario(context))];
  const failures = [];

  for (
    context.currentScenario;
    context.currentScenario < context.scenarios.length;
    context.currentScenario++
  ) {
    const scenario = context.scenarios[context.currentScenario];
    console.log(
      `Running scenario ${context.currentScenario}: ${scenario.name}`
    );
    await processScenario(context, scenario);
    if (scenario.delay) await sleep(scenario.delay);
    failures[context.currentScenario] = runAssertions(context, scenario);
  }
  console.log('=== Finished Scenarios ===');
  return failures;
};

const processScenario = async (
  context: Context,
  { name, action, target, before, after }: Scenario
): Promise<void> => {
  const { clients } = context;
  if (before !== undefined) await before(context);
  if (action) {
    const bytes = pb.Action.encode(action).finish();
    if (typeof target === 'number') {
      if (target === -1) {
        clients.forEach((socket) => {
          socket.send(bytes);
        });
      } else {
        clients[target].send(bytes);
      }
    } else {
      target.forEach((idx) => {
        clients[idx].send(bytes);
      });
    }
  }
  context.scenarioTimings.push({ name: name, time: new Date().getTime() });
  if (after !== undefined) await after(context);
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
const runAssertions = (
  context: Context,
  { expected, ignoreAssertions, target }: Scenario
): Difference[] => {
  const { clients, disconnectedClients } = context;
  const failures = [];
  let currentState: pb.IState = {};
  for (let i = 0; i < clients.length; i++) {
    if (
      (ignoreAssertions &&
        (i === target || (Array.isArray(target) && target.includes(i)))) ||
      disconnectedClients.has(i)
    )
      continue;
    if (i === 0) currentState = { ...clients[0].state };

    const socketState = clients[i].state;
    const difference = diff(currentState, socketState);
    const assertions = expected ? expected(socketState) : [];

    if (Object.keys(difference).length > 0 || assertions.length > 0) {
      failures.push({ socket: i, difference, assertions });
    }
  }
  return failures;
};

const performStatisticalAnalysis = ({
  clients,
  scenarios,
}: Context): Stats[] => {
  console.log();
  console.log('=== Statistics (in milliseconds) ===');
  const statResults: Stats[] = [];
  for (let i = 0; i < scenarios.length; i++) {
    const { name } = scenarios[i];
    const scenarioResults = clients
      .flatMap((socket) => socket.results[i].time)
      .filter((result) => typeof result === 'number' && !isNaN(result));
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

const processFailures = ({ scenarios }: Context, failures: Difference[][]) => {
  for (let i = 0; i < failures.length; i++) {
    const fails = failures[i];
    if (fails?.length > 0) {
      console.log();
      console.log(`Scenario ${i} '${scenarios[i].name}' had failures:`);
      console.log(fails);
    }
  }
};

main();
