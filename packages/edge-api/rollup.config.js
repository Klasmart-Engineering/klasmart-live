import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

export default [
  {
    input: 'src/index.mjs',
    output: {
      exports: 'named',
      format: 'es',
      file: 'dist/index.mjs',
      sourcemap: true,
      // This is a hack!
      // Some librarires expect NODE_ENV to exist, but there is no environment in Cloudlfare Workers
      banner: `const process = {
    env: {
        NODE_ENV: 'hack',
    }
};`
    },
    plugins: [
      typescript(),
      nodeResolve({ browser: true }),
      commonjs(),
      terser(),
    ],
  },
];

