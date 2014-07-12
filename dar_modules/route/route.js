var express = require("express");
var path = require("path");
var app = express();

// route app

app.get('/', function(req, res){
    
    res.sendfile('client/index.html');
  
});

app.get('/js/jquery.js', function(req, res){
    
    res.sendfile('client/js/jquery.js');
  
});

app.get('/js/app.js', function(req, res){
    
    res.sendfile('client/js/app.js');
  
});

module.exports = app; 

module.exports.path = function(){
    
    return path.dirname(module.parent.filename);
    
}