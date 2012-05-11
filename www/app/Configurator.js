/**
 * Конфигуратор приложения
 * Отвечает за настройки подключения к серверу и адреса подгружаемых библиотек
 */
Ext.define('Webinar.Configurator', {
    extend: "Ext.util.Observable",

    serverURL: 'http://127.0.0.1:8123',
    socketIOURL: 'http://127.0.0.1:8123/socket.io/socket.io.js',
    streamURL: '',
    streamPort: '',

    events: ['getSession'],

    /**
     * Получить объект соединения с сервером
     * @return Объект соединения
     */
    getConnection: function() {
        var me = this;
        return Ext.create("Webinar.connection.SocketConnector", {
            url: me.serverURL,
            socketLibraryURL: me.socketIOURL
        });
    },

    /**
     * Получить объект текущей сессии
     * @return Объект текущей сессии
     */
    getSession: function() {
        var me = this;
        Ext.Ajax.request({
            url: 'get_session.php',
            success: function(response) {
                var object = Ext.JSON.decode(response.responseText);
                var session = Ext.create('Webinar.Session', object);
                me.fireEvent('getSession', session);
            }
        });
    },

    /**
     * Получить адрес и порт соединения с сервером видеовещания
     * @return {Object} Адрес и порт сервера видеовещания
     */
    getStreamConnection: function() {
        var me = this;
        return {
            streamURL: me.streamURL,
            streamPort: me.streamPort
        };
    }

});