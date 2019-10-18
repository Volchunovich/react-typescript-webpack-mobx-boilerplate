const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  awcache: path.resolve(__dirname, '../', 'data_tests'),

  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/index.tsx'),

  templatePath: path.resolve(__dirname, '../', 'public/index.html'),

  main: path.resolve(__dirname, '../', 'src'),

  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
