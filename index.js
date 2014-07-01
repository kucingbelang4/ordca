var app = require("express")();
var http = require("http").Server(app);
var io = require('socket.io').listen(http);

app.get('/', function(req, res){
  res.sendfile('client/index.html');
});

app.get('/js/jquery.js', function(req, res){
  res.sendfile('client/js/jquery.js');
});

io.on('connection', function(socket){
    
  console.log('a user connected');
  
  socket.broadcast.emit('hi');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('chat message', function(msg){
      console.log('msg')
      console.log(msg)
    io.emit('chat message', msg);
    io.send('chat message', msg);
  });

  io.emit('some event', { for: 'everyone' });

});

http.listen(process.env.PORT, function(){
    
    console.log('listening on *: '+process.env.IP+':'+process.env.PORT);
  
});