var io = require('socket.io').listen(8123);
io.set('log level', 1);

io.sockets.on('connection', function (socket) {

    var room;

	socket.on('newUser', function(data) {
		room = data.room;
		socket.join(room);
		console.log('newUser in room: ' + room);
        socket.emit('register_user');
	});

    socket.on('msg', function (data) {
        console.log('Send message ' + data.event + ' in room ' + room);
        socket.broadcast.to(room).emit('msg', data);
    });

    socket.on('saveState', function(date) {

    });

    socket.on('disconnect', function() {
        console.log("Socket disconnected in room " + room);
    });

});