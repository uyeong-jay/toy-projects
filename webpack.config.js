const path = require('path');

module.exports = {
  name: 'test-webpack',
  mode: 'development', // 배포용: 'production' 
  devtool: 'evel',
  resolve: {
    extensions: [ '.jsx', '.js' ],
  },

  entry: {
    app: ['./client'],
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babal-loader',
      option: {
        presets: [ '@babel/preset-env', '@babel/preset-react' ],
        plugins: [],
      },
    }],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },

  
}