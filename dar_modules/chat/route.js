'use strict';

module.exports.forward = function (io, iUser){
    
    // handshake verification 
    io.set('authorization', function (handshake, callback) {
        
        console.log(':: route.js socketio :: 8 :: set Authorization')
        
        var auth = 'success',
            userData = iUser.getUser(handshake.query.token),
            allow = true;
        
        if(!userData){
            
            allow = false;
            auth = 'failure';
            
        }
        
        handshake.token = handshake.query.token;

        callback(null, allow);
    
    });
    
    io.of('/users').on('connection', function(socket){
        
        console.log(':: route.js socketio :: 29 :: on /users connection');
        
        iUser.setUserToSocket(socket.handshake.token, socket.id);
        
        var emitData = {
                
                socketId: socket.id,
                sockets: iUser.getSocketsUser(socket.handshake.token)
                
            }
            
        var listData = {
            
            users: function(){
                
                return iUser.getUsers(socket.handshake.token)
                
            },
            
        }
            
        console.log(':: route.js socketio :: 50 :: emit users data start');
        
        console.log(emitData);
    
        socket.emit('sockets', emitData);
        
        socket.emit('list', listData);
        
        socket.broadcast.emit('newUser');
        
        socket.on('disconnect', function(){
     
            console.log(':: route.js socketio :: 62 :: on /users disconnect');
            
            iUser.removeSocketFromUser(socket.id);
            
            socket.broadcast.emit('disconnect');
      
        });
        
        socket.on('refresh', function() {
            
            console.log(':: route.js socketio :: 72 :: on /users refresh');
            
            socket.emit('sockets', emitData);
            
            socket.emit('list', listData.users());
            
        });
        
        socket.on('ready', function(token){});
        
    });
    
    io.of('/chat').on('connection', function(socket){
        
        console.log(':: route.js socketio :: 84 :: on /chat connection');
       
        socket.on('message', function(msg){
         
            var temp = {
                
                socketId: socket.id,
                message: msg
                
            }
         
            io.of('/chat').emit('message', temp);
    
        });
    
    });
    
    io.of('/private_chat').on('connection', function(socket){
        
       //console.log('/private_chat comes in');
        
    })
    
    io.of('/news').on('connection', function(socket){
        
        //console.log('/news comes in');
        
    })
    
    console.log(':: route.js socketio :: 29 :: route socket io setup');
    
    return io;
    
}