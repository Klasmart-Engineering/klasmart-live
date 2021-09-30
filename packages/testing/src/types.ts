export interface ScenarioTimings {
  name: string;
  time: number;
}

export interface Difference {
  socket: number;
  difference: { [k: string]: any };
  assertions: Chai.Assertion[];
}

export interface Result {
  scenario: number;
  name: string;
  time: number;
}

export interface Stats {
  name: string;
  scenario: number;
  min: number;
  max: number;
  p95: number;
  mean: number;
}

