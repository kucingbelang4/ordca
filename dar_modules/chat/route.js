module.exports.forward = function (io, iUser){
    
    io.set('authorization', function (handshake, callback) {

        callback(null, true);
    
    });
    
    io.of('/chat').on('connection', function(socket){
        
       console.log('/chat comes in');
       
       socket.on('message', function(msg){
    
        io.of('/chat').emit('message', msg);
    
       });
        
    });
    
    io.of('/users').on('connection', function(socket){
        
        console.log('/users comes in');
        
        socket.on('ready', function(){
        
            //iUser.getUsers(socket, io.of('/users'))
         
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