var route = require("./dar_modules/route/route"),
    server = require("http").Server(route),
    chat = require('./dar_modules/chat/app');

// socket
chat.start(server);

// server start
server.listen(process.env.PORT, function(){
    
    console.log('listening on *: '+process.env.IP+':'+process.env.PORT);
  
})