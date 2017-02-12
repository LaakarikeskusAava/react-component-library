const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const JS_REGEX = /\.js$|\.jsx$|\.es6$|\.babel$/;

module.exports = {
  entry: [
    './src'
  ],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'aava-react-component-library.js',
    path: './dist',
    library: 'aava-react-component-library',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new ExtractTextPlugin('aava-react-component-library.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['node_modules', 'src']
  },
  module: {
    loaders: [
      {
        test: JS_REGEX,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'postcss',
          'sass'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/,
        loader: 'file-loader',
        name: '[path][name]',
        exclude: /node_modules/
      }
    ]
  }
};
