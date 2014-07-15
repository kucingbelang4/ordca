$(document).ready(function(){
      
      var pm = io.connect('/private_message'),
      chat = io.connect('/chat'),
      news = io.connect('/news'),
      users = io.connect('/users');
      
      
      users.emit('ready');
      
      users.on('list', function(data){
          
          console.log(data);
          
      });
      
      $("#chat").submit(function(e){
        
        chat.emit('message', $('#m').val());
        $('#m').val('');
        
        return false;
         
      });  
      
      chat.on('message', function(msg){
          $('#messages').append($('<li>').text(msg));
      });
      
      // connect notif
      chat.on('connect', function(data){
        
        console.log('connection chat established');
        
      });
      
      // error notif
      pm.on('error', function(data) {
          console.error('pm Unable to connect Socket.IO', data);
      })
      chat.on('error', function(data) {
          console.error('chat Unable to connect Socket.IO', data);
      })
      users.on('error', function(data) {
          console.error('users Unable to connect Socket.IO', data);
      })
      news.on('error', function(data) {
          console.error('news Unable to connect Socket.IO', data);
      })

});