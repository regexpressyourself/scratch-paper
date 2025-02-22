const webpack = require('webpack');
const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: true,
  devtool: 'eval-source-map',

  entry: {
    main: './public/static/index.js',
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/static/dist'),
  },

  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true},
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {sourceMap: true},
          },
        ],
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: true,
              collapseWhitespace: true,
              attrs: ['img:src']
            }
          },
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
};
