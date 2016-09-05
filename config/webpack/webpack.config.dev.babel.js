import webpack from 'webpack';

import {settings, getFilename} from './config';

const config = settings({
  output: {
    filename: 'web/' + getFilename('.js')
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
});

export default config;
