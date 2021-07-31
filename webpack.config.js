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

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },

  
}