const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {};
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return config;
}

module.exports = {
  mode: 'development',
  entry: {
    main: './index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
    hot: isDev
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd
      },
      chunks: ['main']
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      // {
      //   from: path.resolve(__dirname, './img/**/*'),
      //   to: path.resolve(__dirname, 'dist')
      // },
      {
        from: path.resolve(__dirname, './favicon.ico'),
        to: path.resolve(__dirname, 'dist')
      },
      // {
      //   from: path.resolve(__dirname, './fonts/*'),
      //   to: path.resolve(__dirname, 'dist')
      // }
    ]),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev
            },
          },
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.s[ac]ss$/,
        loader: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      }
    ]
  }
}
