var crypto = require('crypto'),

    rainbow = require('./rainbow'), 

    hash = {},

    users = {},

    mapSocket = {},
    
    decodeId = function(crypt){

    return crypto.createHash('md5').update(crypt).digest("hex");

},

    setHash = function(encoded, value){

        hash[encoded] = value;
        
        return encoded;

},

    getHash = function(encoded){

        return hash[encoded];

},

    revealerLiteral = function(obj, callback){

    if(!obj) return false;

}

module.exports.getUserFromSocket = function(socketId){

    var token = mapSocket[socketId];

    var id = getHash(token);

    return users[id];

}

module.exports.setUserToSocket = function(idE, socketId){

    mapSocket[socketId] = idE;

    var id = getHash(idE);

    if(id) {

        if(Object.prototype.hasOwnProperty.call(users[id], 'sockets')){

            if(users[id].sockets === undefined) users[id].sockets = [];

        }else{

            users[id]['sockets'] = [];

        }

        users[id].sockets.push(socketId);

    }

    return socketId;

}

module.exports.getSocketsUser = function(token){

    var id =  getHash(token);

    var list = [];

    if(id){

        if(users[id].sockets !== undefined) list = users[id].sockets;

    }

    return list;

}

module.exports.getUsers = function(encoded){

    console.log('getUSer method')

    var id = getHash(encoded);

    var list = [];

    for(var key in users){

        if(key !== id) list.push(users[key])

    }

    return list;

}

module.exports.getUser = function(encoded){

    var id = getHash(encoded);

    return users[id];

}

module.exports.removeSocketFromUser = function(socketId){

    var encode = mapSocket[socketId];

    var id = getHash(encode);

    if(users[id]){

        if(Object.prototype.hasOwnProperty.call(users[id], 'sockets')){

            var index = users[id].sockets.indexOf(socketId);

            if (index > -1) {

                users[id].sockets.splice(index, 1);

                if(users[id].sockets.length <= 0) delete users[id]

            }

            delete mapSocket[socketId];

            console.log('deleted');

        }

    }

}

module.exports.setUser = function(id, value){

    users[id] = value;

    var encoded = decodeId(id);

    rainbow.setRainbow(setHash(encoded, id));

    return encoded;

}