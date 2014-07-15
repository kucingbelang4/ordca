'use strict';

module.exports.forward = function (io, iUser){
    
    io.set('authorization', function (handshake, callback) {
        
        callback(null, true);
    
    });
    
    io.of('/chat').on('connection', function(socket){
        
        console.log('/chat comes in');
       
        socket.on('message', function(msg){
         
            var temp = {
                
                socketId: socket.id,
                message: msg
                
            }
         
            io.of('/chat').emit('message', temp);
    
        });
    
    });
    
    io.of('/users').on('connection', function(socket){
        
        console.log(socket)
        
        console.log('/users comes in');
        
        socket.on('ready', function(token){
            
           var auth = 'success';
           
           var userData = iUser.getUser(token);
            
            if(userData === undefined){ 
               
               auth = 'failure';
               
            }
            
            iUser.setUserToSocket(token, socket.id)
        
            var emitData = {
                
                auth: auth,
                socketId: socket.id
                
            }
        
            socket.emit('start', emitData);
         
        });
        
        socket.on('disconnect', function(){
         
            console.log('/user disconnect');
             
            //iUser.getUsers(socket, io.of('/users'));
             
            //iUser.users.splice(iUser.users.indexOf(socket), 1);
          
        });
        
    })
    
    io.of('/private_chat').on('connection', function(socket){
        
       //console.log('/private_chat comes in');
        
    })
    
    io.of('/news').on('connection', function(socket){
        
        //console.log('/news comes in');
        
    })
    
    console.log('route Socket setup');
    
    return io;
    
}