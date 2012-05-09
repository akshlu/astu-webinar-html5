var io = require('socket.io');
var socket = new io.Socket('127.0.0.1', {
    port: 8123
});
socket.connect();
socket.on('connect', function() {
    console.log("Socket connected");
});

socket.on('disconnect', function() {
    console.log("Socket disconnected");
});