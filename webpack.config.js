var path = require('path'),
  webpack = require('webpack'),
  PROD = process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'prod',
  filename = 'ticketmaster-client-' + require('./package.json').version;

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: PROD ? [filename, '.min.js'].join('') : [filename, '.js'].join(''),
    library: "TMAPI" // global
  },
  devtool: PROD ? '' : '#cheap-module-inline-source-map',
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    PROD ? new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }) : new webpack.DefinePlugin({
      NODE_ENV: 'development'
    })
  ]
};