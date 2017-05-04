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
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  output: {
    filename: 'aava-react-component-library.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'aava-react-component-library',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'aava-react-component-library.css', allChunks: true }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: ['node_modules', 'src']
  },
  module: {
    rules: [
      {
        test: JS_REGEX,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/,
        loader: 'url-loader',
        exclude: /node_modules/,
      }
    ]
  }
};
