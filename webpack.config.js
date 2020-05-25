'use strict';

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const indexJs = './src/index.js';
const bundleOutputPath = __dirname + './public/';

module.exports = (env, options) => {
  const isDevelopment = options.mode === 'development';
  return {
    entry: {
      main: indexJs
    },
    output: {
      path: bundleOutputPath,
      filename: isDevelopment ? 'bundle.js' : 'bundle.[contenthash].js',
    },
    mode: options.mode,
    resolve: {
      extensions: ['.js', '.json', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]
  }
};
