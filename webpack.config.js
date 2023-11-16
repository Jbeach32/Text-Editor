const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: path.resolve(__dirname, 'client/src/js/index.js'),
      install: path.resolve(__dirname, 'client/src/js/install.js'),
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'client/src/index.html'),
        filename: 'index.html',
      }),
      new WebpackPwaManifest({
        name: 'J.A.T.E',
        short_name: 'J.A.T.E',
      }),
      new InjectManifest({
        swSrc: path.resolve(__dirname, 'client/src/src-sw.js'), // Corrected path
        swDest: 'src-sw.js',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
};

