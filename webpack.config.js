var path = require('path');
var webpack = require('webpack');
var env = process.env.NODE_ENV || 'development';
var PROD = env === 'prod';
var filename = 'ticketmaster-client-' + require('./package.json').version;

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: PROD ? [filename, '.min.js'].join('') : [filename, '.js'].join(''),
    library: 'TMAPI' // global
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
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({NODE_ENV: env}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      comments: false
    })
  ]
};
