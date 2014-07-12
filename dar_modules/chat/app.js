var ioObj = require('socket.io'),
    path = require("path"),
    users = [],
    socketMap = [];

var getList = function(iId, iCallback){

    var list = [];

    console.log('getList method')

    users.forEach(function(value, key){
        
        if(iId !== value.id) {
         
            list.push(value.id);

            
        }
        
    })
    
    iCallback(list);
    
} 

var generateUsers = function(socket, emmiter){
    
    users.forEach(function(key, value){
           
       var myId = socket.id
       
       getList(myId, function(list){
           
            console.log(list)
           
            emmiter.emit('list', list);  
           
       })
        
    });
    
}

var start = function(http){
    
    var io = ioObj.listen(http);
    
    io.set('authorization', function (handshake, callback) {
    
        console.log('handshakeData');
        
        if(handshake.authore === undefined) handshake.authore = 'authore:_'+Math.random();
        
        callback(null, true);
    
    });
    
    io.sockets.on('connection', function (socket) {
        
        var userId = socket.handshake.authore;  
        
        if(!socketMap[userId]) socketMap[userId] = [];
        
        socketMap[userId].push(socket);
        
        console.log('socketMap');
        console.log(socketMap);
        
    });
    
    io.of('/chat').on('connection', function(socket){
        
       console.log('/chat comes in');
       
       users.push(socket);
       
       generateUsers(socket, io.of('/users'))
    
       socket.on('message', function(msg){
    
        io.of('/chat').emit('message', msg);
    
       });
      
      socket.on('disconnect', function(){
         
         console.log('/chat user disconnect');
         
         generateUsers(socket, io.of('/users'))
         
         users.splice(users.indexOf(socket), 1);
          
      });
        
        
    });
    
    io.of('/users').on('connection', function(socket){
        
        console.log('/users comes in');
        
        socket.on('ready', function(){
        
            console.log('chat received');
         
        })
        
    })
    
    io.of('/private_chat').on('connection', function(socket){
        
       console.log('/private_chat comes in');
        
    })
    
    io.of('/news').on('connection', function(socket){
        
        console.log('/news comes in');
        
    })
    
}

module.exports.start = start;

module.exports.path = function(){
    
    return path.dirname(module.parent.filename);
    
}