var express  = require('express');
var path  = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

//Used to buddle Webpack-dev server with Express
var webpackDevMiddleware = require('webpack-dev-middleware')

//This will automatically detect changes we made to source code recompile automatically on change
var webpackHotMiddleware = require('webpack-hot-middleware')

//application configurations
var appConfig = require("./config/config.js")
//import webpack configurations we just created
var webpackConfigs = require('./webpack.config.js')
var APP_PORT = appConfig.APP_PORT;

var Server = new express();


//Setting Development Envirnment With Express
if(appConfig.NODE_ENV == "development"){

  var compiler = webpack(webpackConfigs);

  //configuring webpack server structure. that ultimately used as express server middleware

  var webpackDevServerMiddileware = webpackDevMiddleware(compiler, {
    publicPath:"/static/", //Place where development compiled js created. /static/bundle.js
    stats: {colors: true},
    noInfo: true,
    inline: true,
  });

  //Add Webpack dev-server to express
  Server.use(webpackDevServerMiddileware)

  /**Real time compiler as you code.
  */
  Server.use(webpackHotMiddleware(compiler))

}
//End of development Envirnment



//setting server routing

Server.get("/", function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

//Add Server Public Folder. Same location used for webpack-dev Server
Server.use(express.static('public'));

Server.listen(APP_PORT, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", APP_PORT, APP_PORT)
  }
})
