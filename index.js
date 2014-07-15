'use strict';

var express = require("express"),
    app = express();

var expressSetup = require("./setting").express(express, app),
    route = require("./dar_modules/route/route")(expressSetup),
    server = require("http").Server(route),
    chat = require('./dar_modules/chat/app');

// socket
chat.start(server);

// server start
server.listen(process.env.PORT, function(){
    
    console.log('listening on *: '+process.env.IP+':'+process.env.PORT);
  
});