import path from 'path';

import pkg from './../../package.json';

function getFilename(suffix) {
  return pkg.name + '-' + pkg.version + suffix;
}

const settings = (options) => ({
  entry: './lib/index.js',
  output: Object.assign({}, {
    filename: `node/${pkg.name}.js`,
    library: pkg.name,
    libraryTarget: 'umd',
    path: path.resolve(process.cwd(), 'dist')
  }, options.output),
  devtool: options.devtool,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(process.cwd(), 'lib')
      }
    ]
  },
  resolve: options.resolve,
  plugins: options.plugins
});

export {settings, getFilename};
