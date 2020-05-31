'use strict';

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const outputPath = path.resolve(__dirname, './public');

module.exports = (env, options) => {
  const isDevelopment = options.mode === 'development';
  return {
    entry: `${__dirname}/src/index.js`,
    output: {
      path: outputPath,
      filename: isDevelopment ? 'bundle.js' : 'bundle.[contenthash].js'
    }
    ,
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
    optimization: {
      minimizer: [new TerserPlugin()],
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
        template: `${__dirname}/resources/template.html`,
        minify: true,
        filename: 'index.html',
        title: 'Store App',
        inject: false 
      })
    ]
  }
};
