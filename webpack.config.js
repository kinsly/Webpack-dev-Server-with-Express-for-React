const config = require("./config/config.js")

if(config.NODE_ENV == "development"){
  module.exports = require("./webpack.dev.js")
}else{
	module.exports = require("./webpack.prod.js")
}