/**
 * Created by leo on 2016/7/22.
 */

import path from 'path';

export default {
  entry: './client/src/main.js',
  devtool: '#cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, 'client/src'),
    filename: 'compiled.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    }],
  },
};
