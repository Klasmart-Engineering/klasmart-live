import { extent, quantile, mean } from 'simple-statistics';
import { writeFileSync } from 'fs';
import open from 'open';

import { Context, InterimStatistics, RawData, Stats } from './types';

const html = String.raw;

export const performStatisticalAnalysis = ({
  clients,
  scenarios,
}: Context): InterimStatistics[] => {
  const statResults: InterimStatistics[] = [];
  for (let i = 0; i < scenarios.length; i++) {
    const { name } = scenarios[i];
    const data = clients
      .flatMap((socket) => socket.results[i])
      .map(({ time, errors }) => {
        return {
          time,
          errors,
        };
      });
    statResults.push({
      name,
      scenario: i,
      data,
    });
  }
  return statResults;
};

export const transformStats = async (
  stats: Record<number, InterimStatistics[]>
): Promise<[RawData[], Stats[]]> => {
  const calculatedStats: Stats[] = [];
  const rawData: RawData[] = [];
  const keys: number[] = Object.keys(stats)
    .map((n) => parseInt(n))
    .sort((a, b) => a - b);
  for (const key of keys) {
    const numOfClients = key;
    for (let j = 0; j < stats[key].length; j++) {
      const { scenario, name, data } = stats[key][j];
      const responseTimes = data
        .filter(({ time, errors }) => {
          if (isNaN(time) || errors.length > 0) return false;
          return true;
        })
        .map(({ time }) => time);
      const errors = data
        .filter(({ errors }) => {
          if (errors.length > 0) return true;
          return false;
        })
        .flatMap(({ errors }) => errors);

      if (!rawData[j]) rawData[j] = { scenario, name, data: {}, errors: {} };
      if (!rawData[j].errors[numOfClients])
        rawData[j].errors[numOfClients] = [];
      rawData[j] = {
        ...rawData[j],
        data: {
          ...rawData[j].data,
          [numOfClients]: responseTimes,
        },
        errors: {
          ...rawData[j].errors,
          [numOfClients]: [...rawData[j].errors[numOfClients], ...errors],
        },
      };

      try {
        const [min, max] = extent(responseTimes);
        const p95 = quantile(responseTimes, 0.95);
        const avg = mean(responseTimes);
        if (!calculatedStats[j])
          calculatedStats[j] = { scenario, name, stats: {}, errors: {} };
        calculatedStats[j] = {
          ...calculatedStats[j],
          stats: {
            ...calculatedStats[j].stats,
            [numOfClients]: { p95, max, min, mean: avg },
          },
          errors: {
            ...calculatedStats[j].errors,
            [numOfClients]: errors.length,
          },
        };
      } catch (e) {
        console.error('Failed to calculate statistics', e);
      }
    }
  }
  const now = new Date().getTime();
  writeJsonFile(calculatedStats, `stats/data/testResults-${now}.json`);
  writeJsonFile(rawData, `stats/data/rawData-${now}.json`);
  printStats(calculatedStats);
  await createGraphicalResults(rawData);
  return [rawData, calculatedStats];
};

export const writeJsonFile = <T>(data: T, fileName: string): void => {
  if (process.env.WRITE_STATS_JSON !== 'true') return;
  const jsonStats = JSON.stringify(data, null, 2);
  writeFileSync(fileName, jsonStats, 'utf8');
};

export const writeHtmlFile = (data: string, fileName: string): void => {
  if (process.env.WRITE_STATS_HTML !== 'true') return;
  writeFileSync(fileName, data, 'utf8');
};

export const printStats = (stats: Stats[]): void => {
  const fmtHelper = (
    n: number | string,
    targetLength = 6,
    shiftLeft = true
  ): string => {
    let s = n.toString();
    while (s.length < targetLength) {
      if (shiftLeft) {
        s = ` ${s}`;
      } else {
        s = `${s} `;
      }
    }
    return s;
  };
  console.log();
  console.log('=== Final Statistics for test runs (milliseconds) ===');
  for (const scenario of stats) {
    console.log(
      `======== Scenario: ${scenario.scenario}: ${scenario.name} ========`
    );
    Object.entries(scenario.stats).forEach(([k, v]) => {
      const { p95, min, max, mean } = v;
      console.log(
        `Number of Clients: ${fmtHelper(k, 4, false)}: p95: ${fmtHelper(
          p95
        )}ms | min: ${fmtHelper(min)}ms | max: ${fmtHelper(
          max
        )}ms | mean: ${fmtHelper(mean.toFixed(2))}ms`
      );
    });
    console.log(
      '================================================================'
    );
    console.log();
  }
};

const CSS = html`
  <style>
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .box {
      font: 10px sans-serif;
    }

    .box line,
    .box rect,
    .box circle {
      fill: steelblue;
      stroke: #000;
      stroke-width: 1px;
    }

    .box .center {
      stroke-dasharray: 3, 3;
    }

    .box .outlier {
      fill: none;
      stroke: #000;
    }

    .axis {
      font: 12px sans-serif;
    }

    .axis path,
    .axis line {
      fill: none;
      stroke: #000;
      shape-rendering: crispEdges;
    }

    .x.axis path {
      fill: none;
      stroke: #000;
      shape-rendering: crispEdges;
    }

    .tooltip {
      position: absolute;
      margin: 0;
    }

    path {
      stroke-width: 2.5px;
      fill: none;
    }

    .axis path,
    .axis line {
      fill: none;
      stroke-width: 1;
      shape-rendering: crispEdges;
    }
  </style>
`;

export const createGraphicalResults = async (
  stats: RawData[]
): Promise<string> => {
  if (process.env.WRITE_STATS_HTML !== 'true') return '';
  const data = JSON.stringify(stats);
  const page = html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>KidsLoop Live Room State</title>
        <script src="https://d3js.org/d3.v7.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uuid/8.3.2/uuid.min.js"></script>
        <script src="../../scripts/box.js"></script>
        <script src="../../scripts/scatterplot.js"></script>
        <script src="../../scripts/errorBarChart.js"></script>
        <script src="../../scripts/plotSummaryGraphs.js"></script>
        <script src="../../scripts/plotIndividualScenario.js"></script>
        ${CSS}
      </head>
      <body>
        <script>
          function generateHtmlId() {
            const { v4 } = uuid;
            let id = v4().toString();
            while (id.includes("-")) {
              id = id.replace("-", "");
            }
            return "graph-" + id;
          }

          const stats = ${data};
          scatterplot(stats);
          errorBarChart(stats);
          plotSummaryGraphs(stats);
          for (const stat of stats) {
            plotIndividualGraph(stat);
          }
        </script>
      </body>
    </html>
  `;

  const fileName = `stats/pages/results-${new Date().getTime()}.html`;
  writeHtmlFile(page, fileName);
  await open(fileName, { wait: true });
  return page;
};
