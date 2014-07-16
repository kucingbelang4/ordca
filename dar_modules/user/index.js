var crypto = require('crypto'),

    hash = {},
    
    users = {},
    
    mapSocket = {};

var decodeId = function(crypt){
    
    var h = crypto.createHash('md5').update(crypt).digest("hex");
    
    return h;
    
},

    setHash = function(encoded, value){

        hash[encoded] = value;
        
},

    getHash = function(encoded){
        
        return hash[encoded];
        
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
        
        if(users[id].sockets === undefined) users[id].sockets = []; 
        
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

module.exports.getUsers = function(){
    
    var list = {};
    
    users.forEach(function(key, value){
       
       list.push(value); 
        
    });
    
    return list;
    
}

module.exports.getUser = function(encoded){
    
    var id = getHash(encoded);
    
    return users[id];
    
}

module.exports.setUser = function(id, value){
    
    users[id] = value;
    
    var encoded = decodeId(id);
    
    setHash(encoded, id)
    
    return encoded;
    
}