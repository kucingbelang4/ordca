'use strict';

var path = require("path"),
    users = require("./../user/index");

module.exports = function(app) {

    /* GET */

    app.get('/', function(req, res){

        res.sendfile('template/web/index.html');

    });

    app.get('/me', function(req, res) {

        var meData = users.getUser(req.query['token']);

        res.json({

            data: JSON.stringify(meData),
            response: 'success',
            message: ''

        });

    })

    app.get('/login', function(req, res){

        res.sendfile('template/web/login.html');

    });

    app.get('/logout', function(req, res){

        res.sendfile('template/web/logout.html');

    });

    app.get('/*', function(req, res){

        res.sendfile('template/web'+req.url);

    });

    /* POST */

    app.post('/login', function(req, res){

        console.log('received')

        var token = Math.random(),

        data = req.query,

        hash = users.setUser(token.toString(), data);

        console.log(':: route.js express :: 63 :: data login');
        console.log(users.getUser(hash));

        res.json({

            data: hash,
            response: 'success',
            message: ''

        });

    });

    return app;

}

module.exports.path = function(path){

    return path.dirname(module.parent.filename);

}