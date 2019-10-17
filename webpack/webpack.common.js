const eslint = require('eslint');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
  entry: commonPaths.entryPath,

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(tsx?)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          formatter: eslint.CLIEngine.getFormatter(),
          emitWarning: process.env.NODE_ENV !== 'production',
        },
      },
      {
        test: /\.js$/,
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
        include: [commonPaths.main],
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
    ],
  },

  resolve: {
    modules: ['node_modules', commonPaths.main],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    // new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
    new TypescriptDeclarationPlugin({
      out: commonPaths.typingsPath,
    })
  ],
};
