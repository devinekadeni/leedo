const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PUBLIC_DIR = path.resolve(process.cwd(), 'public')
const DIST_DIR = path.resolve(process.cwd(), 'dist')
const APP_DIR = path.resolve(process.cwd(), 'src')

module.exports = {
  entry: path.resolve(APP_DIR, 'index.tsx'),
  output: {
    path: DIST_DIR,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      pages: path.resolve(APP_DIR, 'pages'),
      components: path.resolve(APP_DIR, 'components'),
      helpers: path.resolve(APP_DIR, 'helpers'),
      constants: path.resolve(APP_DIR, 'constants'),
      assets: path.resolve(APP_DIR, 'assets'),
      styles: path.resolve(APP_DIR, 'styles'),
      reduxpath: path.resolve(APP_DIR, 'redux'),
      context: path.resolve(APP_DIR, 'context'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'assets',
              limit: 10 * 1024,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(PUBLIC_DIR, 'index.html'),
      favicon: path.resolve(PUBLIC_DIR, 'favicon.ico'),
    }),
    new webpack.DefinePlugin({
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
        process.env.FIREBASE_AUTH_DOMAIN
      ),
      'process.env.FIREBASE_DB_URL': JSON.stringify(process.env.FIREBASE_DB_URL),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(
        process.env.FIREBASE_STORAGE_BUCKET
      ),
      'process.env.FIREBASE_MSG_SENDER_ID': JSON.stringify(
        process.env.FIREBASE_MSG_SENDER_ID
      ),
      'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
    }),
  ],
}
