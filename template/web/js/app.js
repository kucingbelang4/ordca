$(document).ready(function(){
      
      var pm = io.connect('/private_message'),
      chat = io.connect('/chat'),
      news = io.connect('/news'),
      users = io.connect('/users');
      
      var scroller = document.getElementById('scroller');
      
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
        
          var html = '<li><a href="#"><div style="float:left" class="talk-bubble tri-right round border left-top"><div class="talktext"><p>'+msg+'</p></div></div></a></li>'          

          $('#messages').append($('<li>').html(html));
          
          scroller.scrollTop = scroller.scrollHeight;
          
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