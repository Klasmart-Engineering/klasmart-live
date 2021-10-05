import { extent, quantile, mean } from 'simple-statistics';
import { writeFileSync } from 'fs';
import open from 'open';

import { Context, InterimStatistics, RawData, Stats } from './types';
import {
  PLOT_SUMMARY_GRAPHS,
  BOX_SCRIPT,
  PLOT_INDIVIDUAL_SCENARIO,
  SCATTER_PLOT,
} from './scripts';
import { NUMBER_OF_CLIENTS } from '.';

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
      .filter(
        (result) =>
          result && typeof result.time === 'number' && !isNaN(result.time)
      )
      .map((result) => result.time);
    statResults.push({
      name,
      scenario: i,
      data,
    });
  }
  return statResults;
};

export const transformStats = async (
  stats: InterimStatistics[][]
): Promise<[RawData[], Stats[]]> => {
  const calculatedStats = [];
  const rawData: RawData[] = [];
  for (let i = 0; i < stats.length; i++) {
    const numOfClients = NUMBER_OF_CLIENTS[i];
    for (let j = 0; j < stats[i].length; j++) {
      const { scenario, name, data } = stats[i][j];

      if (!rawData[j]) rawData[j] = { scenario, name, data: {} };
      rawData[j] = {
        ...rawData[j],
        data: {
          ...rawData[j].data,
          [numOfClients]: data,
        },
      };

      const [min, max] = extent(data);
      const p95 = quantile(data, 0.95);
      const avg = mean(data);
      if (!calculatedStats[j])
        calculatedStats[j] = { scenario, name, stats: {} };
      calculatedStats[j] = {
        ...calculatedStats[j],
        stats: {
          ...calculatedStats[j].stats,
          [numOfClients]: { p95, max, min, mean: avg },
        },
      };
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
  </style>
`;

export const createGraphicalResults = async (
  stats: RawData[]
): Promise<string> => {
  const data = JSON.stringify(stats);
  const page = html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>KidsLoop Live Room State</title>
        <script src="https://d3js.org/d3.v3.min.js"></script>
        ${CSS}
      </head>
      <body>
        <script>
          ${BOX_SCRIPT};
          ${PLOT_INDIVIDUAL_SCENARIO};
          ${PLOT_SUMMARY_GRAPHS};
          ${SCATTER_PLOT};

          const stats = ${data};
          scatterplot(stats);
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

createGraphicalResults([
  {
    scenario: 0,
    name: 'Set host',
    data: {
      '3': [318, 319, 319],
      '10': [323, 320, 317, 319, 320, 320, 317, 319, 321, 318],
      '50': [
        316,
        321,
        332,
        322,
        317,
        316,
        318,
        336,
        318,
        317,
        317,
        333,
        316,
        319,
        318,
        321,
        317,
        321,
        334,
        321,
        330,
        329,
        334,
        320,
        323,
        318,
        332,
        322,
        333,
        319,
        335,
        322,
        322,
        331,
        320,
        330,
        319,
        319,
        323,
        331,
        330,
        336,
        335,
        320,
        320,
        332,
        323,
        324,
        334,
        329,
      ],
      '200': [
        342,
        357,
        343,
        344,
        366,
        372,
        344,
        343,
        345,
        343,
        348,
        356,
        352,
        348,
        346,
        345,
        373,
        353,
        359,
        344,
        352,
        355,
        345,
        345,
        347,
        346,
        352,
        351,
        349,
        347,
        350,
        354,
        353,
        346,
        364,
        348,
        349,
        358,
        347,
        351,
        349,
        348,
        351,
        353,
        349,
        351,
        356,
        353,
        351,
        353,
        373,
        356,
        354,
        352,
        359,
        353,
        355,
        355,
        354,
        352,
        373,
        356,
        362,
        354,
        359,
        363,
        371,
        364,
        356,
        354,
        358,
        356,
        365,
        357,
        355,
        373,
        358,
        355,
        357,
        360,
        361,
        357,
        362,
        360,
        362,
        367,
        362,
        359,
        363,
        358,
        363,
        360,
        357,
        371,
        360,
        364,
        360,
        361,
        362,
        358,
        363,
        361,
        363,
        361,
        361,
        364,
        367,
        371,
        366,
        367,
        364,
        364,
        364,
        372,
        364,
        365,
        365,
        371,
        368,
        368,
        364,
        367,
        364,
        365,
        365,
        365,
        370,
        369,
        365,
        365,
        368,
        365,
        367,
        366,
        369,
        365,
        368,
        366,
        368,
        366,
        370,
        367,
        367,
        368,
        367,
        366,
        372,
        366,
        373,
        372,
        372,
        368,
        366,
        366,
        371,
        369,
        368,
        366,
        369,
        369,
        370,
        373,
        368,
        369,
        371,
        370,
        372,
        372,
        368,
        372,
        369,
        369,
        371,
        369,
        370,
        372,
        370,
        370,
        371,
        370,
        371,
        368,
        370,
        370,
        373,
        369,
        370,
        370,
        369,
        370,
        372,
        370,
        372,
        369,
        371,
        371,
        371,
        372,
        372,
        371,
      ],
    },
  },
  {
    scenario: 1,
    name: 'Send initial chat message',
    data: {
      '3': [319, 317, 318],
      '10': [321, 319, 320, 318, 325, 320, 318, 316, 315, 317],
      '50': [
        323,
        326,
        322,
        325,
        340,
        326,
        325,
        327,
        340,
        327,
        329,
        335,
        333,
        334,
        328,
        547,
        332,
        330,
        326,
        328,
        327,
        548,
        331,
        334,
        329,
        330,
        332,
        331,
        324,
        327,
        336,
        337,
        333,
        339,
        328,
        540,
        339,
        335,
        337,
        544,
        361,
        335,
        338,
        549,
        329,
        333,
        340,
        341,
        324,
        325,
      ],
      '200': [
        338,
        344,
        339,
        565,
        342,
        347,
        346,
        557,
        340,
        341,
        382,
        394,
        339,
        350,
        351,
        345,
        349,
        348,
        353,
        343,
        349,
        345,
        343,
        353,
        343,
        349,
        346,
        349,
        352,
        347,
        571,
        562,
        353,
        345,
        348,
        338,
        341,
        573,
        347,
        359,
        561,
        481,
        346,
        353,
        355,
        560,
        574,
        395,
        572,
        563,
        348,
        563,
        563,
        351,
        566,
        350,
        572,
        424,
        560,
        340,
        385,
        354,
        564,
        562,
        561,
        568,
        592,
        425,
        564,
        402,
        560,
        574,
        570,
        559,
        562,
        592,
        570,
        561,
        564,
        417,
        356,
        355,
        340,
        357,
        357,
        391,
        573,
        563,
        591,
        565,
        359,
        563,
        563,
        356,
        403,
        383,
        566,
        357,
        470,
        466,
        571,
        566,
        358,
        386,
        424,
        564,
        411,
        390,
        481,
        392,
        562,
        460,
        387,
        396,
        561,
        565,
        359,
        418,
        421,
        633,
        401,
        410,
        462,
        411,
        559,
        400,
        402,
        471,
        343,
        341,
        397,
        390,
        388,
        563,
        406,
        482,
        410,
        413,
        561,
        470,
        407,
        475,
        560,
        563,
        477,
        392,
        394,
        562,
        423,
        471,
        479,
        405,
        342,
        468,
        420,
        417,
        557,
        562,
        465,
        404,
        423,
        557,
        420,
        421,
        477,
        412,
        557,
        478,
        415,
        422,
        565,
        562,
        467,
        422,
        467,
        344,
        416,
        466,
        347,
        472,
        563,
        479,
        469,
        461,
        563,
        566,
        465,
        460,
        463,
        565,
        462,
        472,
        464,
        469,
        565,
        463,
        468,
        464,
        345,
        344,
      ],
    },
  },
]);
