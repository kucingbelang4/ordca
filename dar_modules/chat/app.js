'use strict';

var ioObj = require('socket.io'),
    path = require("path"),
    connect = require('connect'),
    iUser = require("./../user/index"),
    routeIo = require("./route");

module.exports.start = function(http){
    
    var io = ioObj.listen(http);
    
    routeIo.forward(io, iUser);
    
};

module.exports.path = function(){
    
    return path.dirname(module.parent.filename);
    
}