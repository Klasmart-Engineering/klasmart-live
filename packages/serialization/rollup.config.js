import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "dist/index.js",
    output: {
      exports: "named",
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      // terser(),
    ],
  },
];
