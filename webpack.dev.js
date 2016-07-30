var path = require('path');
var webpack = require('webpack');
var path = require("path");

module.exports = {
    devtool: 'cheap-module-eval-source-map', //for development
    entry: [
      path.resolve(__dirname, 'js', 'entry.js'),
      ],
    
    output: {
        path: path.join(__dirname, "public/static"), //Place where Final Compiled js is created in production evirnment
        filename: "bundle.js",
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
