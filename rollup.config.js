import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import bundleSize from "rollup-plugin-bundle-size";

const isProduction = process.env.NODE_ENV === "production";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs",
      plugins: [isProduction && terser()],
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**", // only transpile our source code
    }),
    commonjs(), // convert cjs into ES(especially added for react)
    bundleSize(),
  ],
  external: ['react', 'react-dom']
};
