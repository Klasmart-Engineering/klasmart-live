import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

export default [
  {
    input: 'src/ui.ts',
    output: [
      {
        file: packageJson.exports['./ui'],
        format: 'esm',
        sourcemap: true
      },
    ],
    plugins: [
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json' }),
      resolve({ browser: true }),
      commonjs(),
      terser(),
      copy({
        targets: [
          { src: 'src/protobuf', dest: 'dist' },
        ]
      })
    ],
  },
  {
    input: 'src/server.ts',
    output: [
      {
        file: packageJson.exports['./server'],
        format: 'esm',
        sourcemap: true
      },
    ],
    plugins: [
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json' }),
      resolve({ browser: true }),
      commonjs(),
      terser(),
      copy({
        targets: [
          { src: 'src/protobuf', dest: 'dist' },
        ]
      })
    ],
  },
];
