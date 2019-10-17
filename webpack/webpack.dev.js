const webpack = require('webpack');
const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    path: commonPaths.outputPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    contentBase: commonPaths.outputPath,
    compress: true,
    port: 3000,
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
  },
};
