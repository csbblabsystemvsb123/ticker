const path = require('path');
const ENV = process.env.NODE_ENV;
const htmlWebpack = require('html-webpack-plugin');
const webpack = require('webpack');

let baseConfig = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  performance : {
    hints : false
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 6001,
  },
  module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ],
         },
        {
          test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/fonts/'
              }
            }
          ]
        },
        {
          test: /\.(svg|png|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images/'
              }
            }
          ]
        }
      ]
  },
  plugins: [
      new htmlWebpack({
          filename: './index.html',
          template: './src/index.html'
      }),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(ENV)
      }),  
  ]
};

if (ENV === 'production') {
  baseConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = baseConfig;