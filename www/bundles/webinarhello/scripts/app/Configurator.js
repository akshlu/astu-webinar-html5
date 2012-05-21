/**
 * Конфигуратор приложения
 * Отвечает за настройки подключения к серверу и адреса подгружаемых библиотек
 */
Ext.define('Webinar.Configurator', {
    extend: "Ext.util.Observable",

    serverURL: '',
    socketIOURL: '',
    streamURL: '',
    streamPort: '',

    events: ['getSession'],

    /**
     * Получить объект соединения с сервером
     * @return Объект соединения
     */
    getConnection: function() {
        var me = this;
        return Ext.create("Webinar.connection.ConnectionManager", {
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
        var url = document.URL;
        var lines = url.split('/');
        if (lines.length > 0) {
            var id_webinar = lines[lines.length - 1];
            console.log(id_webinar);
            Ext.Ajax.request({
                url: 'getsettings/' + id_webinar,
                success: function(response) {
                    var object = Ext.JSON.decode(response.responseText);
                    var session = Ext.create('Webinar.Session', object);
                    me.serverURL = session['nodeServer'];
                    me.socketIOURL = session['socketIOURL'];
                    me.fireEvent('getSession', session);
                },
                failure: function() {
                    me.fireEvent('noSession');
                }
            });
        }
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