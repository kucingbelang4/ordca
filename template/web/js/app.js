$(document).ready(function(){
      
      var pm = io.connect('/private_message'),
      chat = io.connect('/chat'),
      news = io.connect('/news'),
      users = io.connect('/users'),
      mySocketId = undefined;
      
      var scroller = document.getElementById('scroller');
      
      var refreshList = function(data){
        
        var temp = '';
      
        for(var a in data){
          
          temp += '<li><a href="#"><i class="user1"><img src="images/user1.jpg" alt=""></i><span>'+data[a].username+'</span></a></li>';
          
        }
        
        $(document.body).find('ul.user_img').html(temp);
        
      }
      
      users.emit('ready', $.cookie('auth'));
      
      users.on('start', function(idata){
        
        console.log(':: all Set!');
        
        if(idata.auth == 'failure') {
          
          window.location.href = '/login#fail';
          
        }
        
        if(mySocketId === undefined) mySocketId = idata.socketId;
        
        chat.on('message', function(data){
          
            var pos = 'right';
            
            if(idata.sockets.indexOf(data.socketId) > -1) pos = 'left';
          
            var html = '<a href="#"><div style="float:'+pos+'" class="wrapword talk-bubble tri-right round border '+pos+'-top"><div class="talktext"><p>'+data.message+'</p></div></div></a>'          
  
            $('#messages').append($('<li>').html(html));
            
            scroller.scrollTop = scroller.scrollHeight;
            
        });
        
        users.emit('refresh');
        
      });
      
      users.on('disconnect', function(data){
        
        users.emit('refresh');
        
      });
      
      users.on('newUser', function(data){
        
        users.emit('refresh');
        
      });
      
      users.on('list', function(data){
        
          console.log('data list exec')
          
          refreshList(data)
          
      });
      
      $("#chat").submit(function(e){
        
          chat.emit('message', $('#m').val());
          
          $('#m').val('');
          
          return false;
          
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