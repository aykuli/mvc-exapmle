// https://github.com/webpack-contrib/file-loader#publicpath

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name: '[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'covid',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    // publicPath: './dist',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 3000,
  },
};
