const path = require('path')
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
      references: path.resolve(APP_DIR, 'references'),
      styles: path.resolve(APP_DIR, 'styles'),
      reduxpath: path.resolve(APP_DIR, 'redux'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
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
      // favicon: path.resolve(PUBLIC_DIR, 'favicon.ico'),
    }),
  ],
}
