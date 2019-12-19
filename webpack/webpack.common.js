const ProgressPlugin = require('webpack').ProgressPlugin;
const CLIEngine = require('eslint').CLIEngine;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
  entry: [
    commonPaths.entryPath,
    "core-js/modules/es.promise",
    "core-js/modules/es.array.iterator"
  ],
  output: {
    path: commonPaths.outputPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(tsx?)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          cache: true,
          formatter: CLIEngine.getFormatter(),
          emitWarning: process.env.NODE_ENV !== 'production',
        },
      },
      {
        test: /\.(jsx?)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(tsx?)$/,
        use: [
          {
            options: {
              useTranspileModule: true,
              forceIsolatedModules: true,
              useCache: true,
              useBabel: true,
              cacheDirectory: commonPaths.awcache,
              babelOptions: {
                babelrc: false,
                presets: ['@babel/preset-env', '@babel/preset-typescript'],
              },
              reportFiles: ['src/**/*.{ts,tsx}'],
              babelCore: '@babel/core',
            },
            loader: 'awesome-typescript-loader',
          },
        ],
        include: commonPaths.src,
      },

      {
        test: /\.(png|jpg|jpeg|webp|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder,
            },
          },
        ],
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder,
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: commonPaths.wwwPath,
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
  ],
};
