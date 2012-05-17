var io = require('socket.io').listen(8123);
io.set('log level', 1);

var db = require('./database.js').Database;

var applications = {};

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

    socket.on('saveState', function(data) {
        console.log('saveState ' + data.application);
        data.data = JSON.stringify(data.data);
        if (applications[data.application]) {
            var state = db.State.build({
                time: data.time,
                data: data.data,
                webinar_id_webinar: room,
                application_id_application: applications[data.application]
            });
            state.save().
                success(function(anotherState) {
                    console.log('success');
                }).
                error(function(error) {
                    console.log('error');
                    console.log(error);
                });
        } else {
            var app = db.Application.find({where: {alias: data.application}}).success(function(app) {
                applications[data.application] = app.id_application;
                var state = db.State.build({
                    time: data.time,
                    data: data.data,
                    webinar_id_webinar: room,
                    application_id_application: applications[data.application]
                });
                state.save().
                    success(function(anotherState) {
                        console.log('success');
                    }).
                    error(function(error) {
                        console.log('error');
                        console.log(error);
                    });
            });
        }
    });

    socket.on('restoreState', function(data) {
        var event = data.event;
        var time = data.time.toString();
        if (applications[data.application]) {
            db.State.find({
                where: 'application_id_application=' + applications[data.application] + ' and time <\'' + time + '\'',
                order: 'time DESC'
            }).success(function(state) {
                socket.emit('restoreState', {
                    application: data.application,
                    event: data.event,
                    time: state.time,
                    data: state.data
                });
                console.log('send restoreState');
            });
        } else {
            db.Application.find({where: {alias: data.application}}).success(function(app) {
                applications[data.application] = app.id_application;
                db.State.find({
                    where: 'application_id_application=' + applications[data.application] + ' and time <\'' + time + '\'',
                    order: 'time DESC'
                }).success(function(state) {
                    socket.emit('restoreState', {
                        application: data.application,
                        event: data.event,
                        time: state.time,
                        data: state.data
                    });
                    console.log('send restoreState');
                });
            });
        }
    });

    socket.on('disconnect', function() {
        console.log("Socket disconnected in room " + room);
    });

});