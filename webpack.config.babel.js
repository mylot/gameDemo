/**
 * Created by leo on 2016/7/22.
 */

export default {
  entry: './client/src/main.js',
  devtool: 'source-map',
  output: {
    path: './client/src/',
    filename: 'main.compiled.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    }],
  },
};
