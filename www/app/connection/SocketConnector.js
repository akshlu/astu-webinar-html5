/**
 * Класс соединения через WebSockets с сервером
 * @param url Адрес сервера
 * @param socketLibraryURL Адрес библиотеки для работы с сокетами
 */
Ext.define("Webinar.connection.SocketConnector", {
    extend: "Ext.util.Observable",

    url: '',
    socketLibraryURL: '',
    socket: null,

    /**
     * Инициализировать класс соединения
     */
    connect: function() {
        Webinar.Connection = this;
        this.addEvents('connect', 'disconnect', 'message');
        this.loadSocketLibrary();
    },

    /**
     * Загрузить библиотеку для работы с WebSockets
     */
    loadSocketLibrary: function() {
        var me = this;
        Ext.Loader.injectScriptElement(
            //url
            me.socketLibraryURL,
            //success
            function() {
                me.connectToServer();
            },
            //error
            function() {
                me.fireEvent('disconnect');
            }
        );
    },

    /**
     * Подключиться к серверу
     */
    connectToServer: function() {
        this.socket = io.connect(this.url);
        var socket = this.socket;
        var me = this;
        socket.on('connect', function() {
            socket.on('register_user', function() {
                me.fireEvent('connect', {
                    url: me.url
                });
            });
            socket.emit('newUser', {
                room: Webinar.currentSession.id_webinar
            });
            socket.on('msg', function(message) {
                me.fireEvent(message.event, {
                    message: message.message
                });
            });
        });

        socket.on('disconnect', function() {
        });
    },

    /**
     * Отправить сообщение на сервер
     * @param event {String} Тип события отправляемого сообщения
     * @param message {Object} Содержимое сообщения
     */
    send: function(event, message) {
        this.socket.emit('msg', {
            'id_user': Webinar.currentSession.id_user,
            'event': event,
            'message': message
        });
    },

    saveState: function(application, data) {
        this.socket.emit('saveState', {
            application: application,
            time: new Date(),
            data: data
        });
    }
});