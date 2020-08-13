const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpackBase = require('./webpack.common')

const APP_DIR = path.resolve(process.cwd(), 'src')

const webpackDev = {
  mode: 'development',
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(APP_DIR, 'index.tsx'),
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { plugins: ['react-refresh/babel'] },
          },
          'ts-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshPlugin({
      overlay: {
        sockIntegration: 'whm',
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}

module.exports = merge(webpackBase, webpackDev)
