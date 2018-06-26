import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'index.ts',
  output: {
    format: 'umd',
    file: 'index.js',
    name: 'isWebPExtended',
    sourcemap: true,
  },
  plugins: [
    typescript(/*{ plugin options }*/)
  ],
};
