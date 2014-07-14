var express = require("express");
var path = require("path");
var app = express();

// route app

app.get('/', function(req, res){
    
    res.sendfile('template/web/index.html');
  
});

app.get('/*', function(req, res){
    
    res.sendfile('template/web'+req.url);
  
});

module.exports = app; 

module.exports.path = function(){
    
    return path.dirname(module.parent.filename);
    
}