'use strict';

var path = require("path");

module.exports = function(app) {
    
    // route app

    app.get('/', function(req, res){
        
        res.sendfile('template/web/index.html');
      
    });
    
    app.get('/*', function(req, res){
        
        res.sendfile('template/web'+req.url);
      
    });
    
    return app;
    
}

module.exports.path = function(path){
    
    return path.dirname(module.parent.filename);
    
}