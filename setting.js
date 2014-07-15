'use strict';

var passport = require("passport");

module.exports.express = function(express, app){
    
    app.use(passport.initialize());
    app.use(passport.session());
    
    console.log('set up Express done');
    
    return app;
    
}