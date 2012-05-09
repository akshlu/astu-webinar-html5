var io = require('socket.io').listen(8123);
var Client = require('mysql').Client;

var client = new Client();
client.user = 'root';
client.password = '123';
client.host = '127.0.0.1';
client.query('show tables from mydb', function(error, result, fields) {
    console.log(result);
});

io.sockets.on('connection', function (socket) {
	var room;
	socket.on('newUser', function(data) {
		room = data.room;
		socket.join(room);
		console.log('newUser in room: ' + room);
	});
    socket.on('msg', function (data) {
        console.log("Send message to room " + room);
        //socket.broadcast.to(room).emit('msg', {text: data.text});
        socket.broadcast.to(room).emit('msg', data);
    });
    socket.on('disconnect', function() {
        console.log("Socket disconnected");
    });
});