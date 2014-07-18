$(document).ready(function(){

    var _users = {

      "other": [],

      "sockets": []

    }

      var pm = io.connect('/private_message', {

        query: 'token='+$.cookie('auth')

      }),
      chat = io.connect('/chat', {

        query: 'token='+$.cookie('auth')

      }),
      news = io.connect('/news', {

        query: 'token='+$.cookie('auth')

      }),
      users = io.connect('/users', {

        query: 'token='+$.cookie('auth')

      }),
      mySocketId;

      var scroller = document.getElementById('scroller');

      var refreshList = function(data){

        var temp = '',
            tempU = []

        for(var a in data){

          tempU.push(data[a].username);

          temp += '<li><a href="#"><i class="user1"><img src="images/user1.jpg" alt=""></i><span>'+data[a].username+'</span></a></li>';

        }

        _users.other = tempU;

        $(document.body).find('ul.user_img').html(temp);

      }

      var redirect = function(){

        window.location.href = 'logout';

      }

      users.emit('refresh');

      users.on('newUser', function(data){

        users.emit('refresh');

      });

      users.on('sockets', function(data) {

        _users.sockets = data.sockets;

      });

      users.on('list', function(data){

          console.log('data list exec')

          refreshList(data);

      });

      users.on('disconnect', function(data){

        users.emit('refresh');

      });

      chat.on('message', function(data){

        console.log('message')

        var pos = 'right';

        console.log(_users.sockets.indexOf(data.socketId));

        if(_users.sockets.indexOf(data.socketId) > -1) pos = 'left';

        var html = '<a href="#"><div style="float:'+pos+'" class="wrapword talk-bubble tri-right round border '+pos+'-top"><div class="talktext"><p>'+data.message+'</p></div></div></a>'

        $('#messages').append($('<li>').html(html));

        scroller.scrollTop = scroller.scrollHeight;

      });

      $("#chat").submit(function(e){

          chat.emit('message', $('#m').val());

          $('#m').val('');

          return false;

        });

      chat.on('error', function(data) {
          console.error('chat Unable to connect Socket.IO', data);
          //redirect();
      })
      users.on('error', function(data) {
          console.error('users Unable to connect Socket.IO', data);
          //redirect();
      })


});