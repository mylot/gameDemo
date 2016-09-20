/**
 * Created by leo on 2016/7/22.
 */

export default {
  entry: './client/src/app.js',
  devtool: 'source-map',
  output: {
    path: './client/src/',
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
