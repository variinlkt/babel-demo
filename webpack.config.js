const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: ['./index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /(\.jsx|\.js)$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }
    ]
}
};