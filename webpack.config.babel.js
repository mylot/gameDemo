/**
 * Created by leo on 2016/7/22.
 */

import path from 'path';

export default {
  entry: './client/src/app.js',
  devtool: '#cheap-module-eval-source-map',
  output: {
    path: './client/compiled',
    filename: 'app.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    }],
  },
};
