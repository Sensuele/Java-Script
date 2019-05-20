'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: '/lesson-15/',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  watch: true,

  devtool: "source-map"
};
