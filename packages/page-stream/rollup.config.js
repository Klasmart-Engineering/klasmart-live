import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript'

export default [
  {
    input: 'src/report/entry.ts',
    output: {
      exports: 'named',
      format: 'es',
      file: 'dist/report.js',
      sourcemap: true
    },
    plugins: [
      commonjs(),
      nodeResolve({ browser: true }),
      terser(),
      typescript()
    ]
  },
  {
    input: 'src/review/entry.ts',
    output: {
      exports: 'named',
      format: 'es',
      file: 'dist/review.js',
      sourcemap: true
    },
    plugins: [
      commonjs(),
      nodeResolve({ browser: true }),
      terser(),
      typescript()
    ]
  },
]
