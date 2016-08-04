import webpack from 'webpack';

import {settings, getFilename} from './config';

const config = settings({
  output: {
    filename: 'web/' + getFilename('.min.js')
  },
  devtool: false,
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      comments: false,
      sourceMap: false
    })
  ]
});

export default config;
