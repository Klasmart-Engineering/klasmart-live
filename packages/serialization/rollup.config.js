import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy"

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/index.js",
    },
    plugins: [
      typescript({ tsconfig: "./tsconfig.json" }),
      nodeResolve({ browser: true }),
      commonjs(),
      terser(),
      copy({
        targets: [
          { src: 'src/*.d.ts', dest: 'dist' }
        ]
      }),
    ],
  },
];
