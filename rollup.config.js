import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'index.ts',
  output: {
    format: 'umd',
    file: 'index.js',
    name: 'isWebPExtended',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({ browser: true, preferBuiltins: false }),
    commonjs(),
    typescript(),
  ],
};
