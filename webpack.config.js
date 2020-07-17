const path = require('path');
module.exports = {
  // define entry file and output
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'main.js'
  },
  // define babel loader
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.less'],
  }
};