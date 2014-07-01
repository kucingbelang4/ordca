var http = require('http').createServer(handler)
var io = require('socket.io')(3000)
var fs = require('fs')

http.listen(8080)

function handler(req, res){

	console.log('Running')

	fs.readFile(__dirname+'/client/index.html' , function(err, data){

		if(err){
			res.writeHead(500)
			return res.end('Error loading index.html')
		}

		res.writeHead(200)
		console.log(data)
		res.end(data)

	})

}

io.on('connection', function(socket){

	socket.emit('news', {hello: 'world'})
	
	socket.on('my other events', function(data){
		console.log(data)
	})

})