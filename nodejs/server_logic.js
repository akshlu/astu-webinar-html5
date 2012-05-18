var db = require('./database.js').Database;

var applications = {};

/**
 * Сохранить состояние приложения для заданного вебинара
 * @param room идентификатор комнаты вебинара
 * @param data Информация приложения
 */
function saveState(room, data) {
    console.log('saveState ' + data.application);
    if (applications[data.application]) {
        _saveState(room, data);
    } else {
        var app = db.Application.find({where: {alias: data.application}}).success(function(app) {
            applications[data.application] = app.id_application;
            _saveState(room, data);
        });
    }
}

/**
 * Сохранить состояние приложения в базу
 * @param data Информация о состоянии приложения
 * @private
 */
function _saveState(room, data) {
    var state = db.State.build({
        time: data.time,
        data: data.data,
        webinar_id_webinar: room,
        application_id_application: applications[data.application]
    });
    state.save().success(function(anotherState) {
    }).error(function(error) {
        console.log('error');
        console.log(error);
    });
}

/**
 * Восстановить состояние приложения для вебинара room исходя из информации в data и оповестить об этом
 * пользователя, подключенному по сокету socket
 * @param room Идентификатор вебинара
 * @param data Информация приложения для восстановления состояния
 * @param socket Сокет пользователя, запросившего информацию
 */
function restoreState(room, data, socket) {
    var event = data.event;
    var time = data.time.toString();
    if (applications[data.application]) {
        db.State.find({
            where: 'webinar_id_webinar=' + room + ' and application_id_application=' + applications[data.application] + ' and time <\'' + time + '\'',
            order: 'time DESC'
        }).success(function(state) {
                if (state) {
                    socket.emit('restoreState', {
                        application: data.application,
                        event: data.event,
                        time: state.time,
                        data: state.data
                    });
                    console.log('send restoreState');
                }
            });
    } else {
        db.Application.find({where: {alias: data.application}}).success(function(app) {
            console.log(app);
            applications[data.application] = app.id_application;
            db.State.find({
                where: 'webinar_id_webinar=' + room + ' and application_id_application=' + applications[data.application] + ' and time <\'' + time + '\'',
                order: 'time DESC'
            }).success(function(state) {
                    if (state) {
                        socket.emit('restoreState', {
                            application: data.application,
                            event: data.event,
                            time: state.time,
                            data: state.data
                        });
                        console.log('send restoreState');
                    }
                });
        });
    }
}

exports.ServerLogic = {
    saveState: saveState,
    restoreState: restoreState
};