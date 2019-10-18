const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  awcache: path.resolve(__dirname, '../', 'data_tests/'),

  outputPath: path.resolve(__dirname, '../', 'build/'),

  entryPath: path.resolve(__dirname, '../', 'src/index.tsx'),
  examplePath: path.resolve(__dirname, '../', 'src/example/index.tsx'),

  wwwPath: path.resolve(__dirname, '../', 'public/index.html'),

  src: path.resolve(__dirname, '../', 'src'),

  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
