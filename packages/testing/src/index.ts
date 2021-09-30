import { diff } from 'deep-object-diff';
import { extent, quantile, mean } from 'simple-statistics';

import pb from 'kidsloop-live-serialization';

import { WebsocketClient } from './client';
import { sleep } from './util';
import { Context, Difference, InterimStatistics, Stats } from './types';
import { Scenario, SCENARIOS } from './scenarios';

export const BASE_URL = 'wss://live.kidsloop.dev/api/room';
export const NUMBER_OF_CLIENTS = [3, 10, 50, 200];

async function main() {
  const stats = [];
  console.log('=== Starting Testing ===');
  for (const numOfClients of NUMBER_OF_CLIENTS) {
    console.log(`\n=== Starting Scenario with ${numOfClients} clients ===`);
    const ctx: Context = {
      clients: [],
      disconnectedClients: new Set<number>(),
      scenarios: [],
      scenarioTimings: [],
      currentScenario: 0,
    };

    await initializeClients(numOfClients, ctx);

    const failures = await processScenarios(ctx);

    stats.push(performStatisticalAnalysis(ctx));

    processFailures(ctx, failures);
    console.log(`=== Finished tests with ${numOfClients} clients ===\n`);
  }
  const finalStats = transformStats(stats);

  console.log('=== Finished running all scenarios. Tests Passed ===');
  process.exit(0);
}

const initializeClients = async (numOfClients: number, ctx: Context) => {
  let roomId = '';
  const { clients } = ctx;
  for (let i = 0; i < numOfClients; i++) {
    const ws = new WebsocketClient(i, roomId, ctx);
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
    } else if (i % Math.floor(numOfClients / 4) === 0) {
      console.log(`Initializing Client ${i + 1}`);
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

const processScenarios = async (ctx: Context): Promise<Difference[][]> => {
  console.log('=== Starting Scenarios ===');
  // Initialize senarios
  ctx.scenarios = [...SCENARIOS.map((scenario) => scenario(ctx))];
  const failures = [];

  for (
    ctx.currentScenario;
    ctx.currentScenario < ctx.scenarios.length;
    ctx.currentScenario++
  ) {
    const scenario = ctx.scenarios[ctx.currentScenario];
    console.log(`Running scenario ${ctx.currentScenario}: ${scenario.name}`);
    await processScenario(ctx, scenario);
    if (scenario.delay) await sleep(scenario.delay);
    failures[ctx.currentScenario] = runAssertions(ctx, scenario);
  }
  console.log('=== Finished Scenarios ===');
  return failures;
};

const processScenario = async (
  ctx: Context,
  { name, action, target, before, after }: Scenario
): Promise<void> => {
  const { clients, currentScenario } = ctx;
  if (before !== undefined) await before(ctx);
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
  ctx.scenarioTimings[currentScenario] = { name, time: new Date().getTime() };
  if (after !== undefined) await after(ctx);
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
  ctx: Context,
  { expected, ignoreAssertions, target }: Scenario
): Difference[] => {
  const { clients, disconnectedClients } = ctx;
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
}: Context): InterimStatistics[] => {
  const statResults: InterimStatistics[] = [];
  for (let i = 0; i < scenarios.length; i++) {
    const { name } = scenarios[i];
    const scenarioResults = clients
      .flatMap((socket) => socket.results[i])
      .filter(
        (result) =>
          result && typeof result.time === 'number' && !isNaN(result.time)
      )
      .map((result) => result.time);
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
  return statResults;
};

const transformStats = (stats: InterimStatistics[][]): Stats[] => {
  if (stats.length !== NUMBER_OF_CLIENTS.length)
    throw new Error(
      'Expected status to have been generated for each set of clients'
    );
  const results = [];
  for (let i = 0; i < stats.length; i++) {
    const numOfClients = NUMBER_OF_CLIENTS[i];
    for (let j = 0; j < stats[i].length; j++) {
      const k = `Number of users: ${numOfClients}`;
      const { scenario, name, p95, max, min, mean } = stats[i][j];
      if (!results[j]) results[j] = { scenario, name, stats: {} };
      results[j] = {
        ...results[j],
        stats: { ...results[j].stats, [k]: { p95, max, min, mean } },
      };
    }
  }
  console.log('=== Final Statistics for test runs (milliseconds) ===');
  console.log(JSON.stringify(results, null, 2));
  return results;
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
