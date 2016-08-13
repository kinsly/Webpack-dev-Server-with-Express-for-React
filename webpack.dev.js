var path = require('path');
var webpack = require('webpack');
var path = require("path");

module.exports = {
    devtool: 'cheap-module-eval-source-map', //for development

    // location of your main js file
    entry: [
      path.resolve(__dirname, 'js', 'entry.js'),
      ],

    output: {
        path: path.join(__dirname, "public/static"), //Where to place Final Compiled js
        filename: "bundle.js",    //Name of compiled js
    },

    module: {
      loaders: [
        {
          exclude: /node_modules/,
          loaders: ['babel'],
          test: /\.js$/,

        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ]

}
