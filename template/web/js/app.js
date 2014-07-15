$(document).ready(function(){
      
      var pm = io.connect('/private_message'),
      chat = io.connect('/chat'),
      news = io.connect('/news'),
      users = io.connect('/users'),
      socketId;
      
      var scroller = document.getElementById('scroller');
      
      users.emit('ready', $.cookie('auth'));
      
      users.on('start', function(data){
        
        console.log(':: all Set!');
        
        if(data.auth == 'failure') window.location.href = '/login';
        
        if(socketId === undefined) socketId = data.socketId;
        
        $("#chat").submit(function(e){
        
          chat.emit('message', $('#m').val());
          
          $('#m').val('');
          
          return false;
          
        });  
        
        chat.on('message', function(data){
          
            var pos = 'right';
            
            if(data.socketId == socketId) pos = 'left';
          
            var html = '<a href="#"><div style="float:'+pos+'" class="talk-bubble tri-right round border '+pos+'-top"><div class="talktext"><p>'+data.message+'</p></div></div></a>'          
  
            $('#messages').append($('<li>').html(html));
            
            scroller.scrollTop = scroller.scrollHeight;
            
        });
        
      });
      
      users.on('list', function(data){
          
          console.log(data);
          
      });
      
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