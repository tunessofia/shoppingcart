'use strict';

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

function absPath() {
  let tmp = [__dirname].concat(Array.prototype.slice.call(arguments));
  return path.join.apply(path, tmp);
}

function srcPath() {
  let args = ['src'].concat(Array.prototype.slice.call(arguments));
  return absPath.apply(this, args);
}

const indexJsPath = srcPath('index.js');
const templateHtmlPath = absPath('resources', 'template.html');
const indexHtmlOutputPath = absPath('public', 'index.html');
const bundleOutputPath = absPath('public');

module.exports = (env, options) => {
  const isDevelopment = options.mode === 'development';
  return {
    entry: {
      main: indexJsPath
    },
    output: {
      path: bundleOutputPath,
      filename: isDevelopment ? 'bundle.js' : 'bundle.[contenthash].js',
    },
    mode: options.mode,
    resolve: {
      extensions: ['.js', '.json', '.jsx', '.scss']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css'
      }),
      new OptimizeCSSAssetsPlugin({}),
      new HtmlWebPackPlugin({
        template: templateHtmlPath,
        minify: true,
        filename: 'index.html',
        title: 'Store App'
      })
    ]
  }
};
