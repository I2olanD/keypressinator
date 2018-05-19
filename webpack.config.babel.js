import path from 'path';

const resolve = dir => path.resolve(__dirname, dir);
const isProd = process.argv.indexOf('-p') !== -1;

module.exports = {
  mode: isProd ? 'production' : 'development',

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: resolve('public'),
  },

  devServer: {
    contentBase: resolve('public'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
