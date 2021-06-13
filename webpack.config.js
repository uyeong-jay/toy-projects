const path = require('path');
const { webpack } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = {
  name: "webpack-setting",
  devtool: "eval",
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
  mode: "development",
  entry: {
    app: ['./client'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
        ],
        plugins: ['react-refresh/babel'],
      },
      exclude: ['/node_modules'],
    }],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },
  devSqerver: {
    publicPath: '/dist/',
    hot: true,
  }
}