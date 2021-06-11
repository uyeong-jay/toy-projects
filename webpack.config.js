const path = require('path');

module.exports = {
  name: "webpack-setting",
  devtool: "eval",
  resolve: {
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
      },
    }],
  },
  plugins: [],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/'
  },
}