var path = require('path');
var webpack = require('webpack');
var path = require("path");

module.exports = {
    devtool: 'cheap-source-map', 
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
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      minimize: true
    }),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
    new webpack.optimize.DedupePlugin()
    ]

}
