import { WebsocketClient } from './client';
import { Scenario } from './scenarios';

export interface Context {
  clients: WebsocketClient[];
  disconnectedClients: Set<number>;
  scenarios: Scenario[];
  scenarioTimings: ScenarioTimings[];
  currentScenario: number;
}

export interface ScenarioTimings {
  name: string;
  time: number;
}

export interface Difference {
  socket: number;
  difference: { [k: string]: any };
  assertions: string[];
}

export interface Result {
  scenario: number;
  name: string;
  time: number;
  errors: string[];
}

export interface InterimStatistics {
  name: string;
  scenario: number;
  data: { time: number; errors: string[] }[];
}

export interface Stats {
  name: string;
  scenario: number;
  // K: NumberOfClients, V: Stats
  stats: Record<number, InternalStats>;
  // K: NumberOfClients, V: Number of errors
  errors: Record<number, number>;
}

export interface RawData {
  name: string;
  scenario: number;
  // K: NumberOfClients, V: time in milliseconds
  data: Record<number, number[]>;
  // K: NumberOfClients, V: Error messages
  errors: Record<number, string[]>;
}

interface InternalStats {
  min: number;
  max: number;
  p95: number;
  mean: number;
}
