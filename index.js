'use strict';


var portV = process.env.PORT || 7500;
var ipV = process.env.IP || '127.0.0.1';

/*

var portV = process.env.PORT;
var ipV = process.env.IP;

*/
var express = require("express"),
    app = express();

var expressSetup = require("./setting").express(express, app),
    route = require("./dar_modules/route/route")(expressSetup),
    server = require("http").Server(route),
    chat = require('./dar_modules/chat/app');

// socket
chat.start(server);

// server start
server.listen(portV, ipV , function(){

    console.log('listening on *: '+ipV+':'+portV);

});
