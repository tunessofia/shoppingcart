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
    performance: {
      hints: false
    },
    mode: options.mode,
    devtool: isDevelopment ? 'cheap-module-eval-source-map' : false,
    resolve: {
      extensions: ['.js', '.json', '.jsx', '.scss']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false,
                  targets: {
                    browsers: ['last 2 chrome versions']
                  }
                }
              ],
              '@babel/preset-react'
            ],
            plugins: [
              [require('babel-plugin-transform-imports'), {
                "react-bootstrap": {
                  transform: "react-bootstrap/lib/${member}",
                  preventFullImport: true
                }
              }]
            ]
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
        title: 'Store App',
        inject: false 
      })
    ]
  }
};
