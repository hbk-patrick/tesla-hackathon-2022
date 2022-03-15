const path = require('path');

module.exports = {
  entry: './src/bootstrap.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map'

}