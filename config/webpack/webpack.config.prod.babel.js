import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import {version} from '../../package.json';
import {settings, getFilename} from './config';

const config = settings({
  devtool: false,

  output: {
    filename: 'web/' + getFilename('.min.js')
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug:    false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:  {warnings: false},
      comments:  false,
      sourceMap: false
    }),
    new HtmlWebpackPlugin({
      title:    'Ticketmaster SDK: ' + version,
      filename: '../docs/web/index.html',
      template: 'config/docs/index.html',
      inject:   'head'
    })
  ]
});

export default config;
