// TODO: split dev and production configs
var path = require('path');
var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

var env = process.env.NODE_ENV || 'development';
var PROD = env === 'production';
var filename = 'ticketmaster-client-' + require('./package.json').version;

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: PROD ? filename + '.min.js' : filename + '.js',
    library: 'TMAPI', // global
    libraryTarget: 'umd'
  },
  devtool: PROD ? false : 'cheap-module-inline-source-map',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(process.cwd(), 'lib')
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin,
    new webpack.DefinePlugin({NODE_ENV: env}),
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
};
