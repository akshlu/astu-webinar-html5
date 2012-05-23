/**
 * Модель flash-виджета для видео-аудио-вещания
 */
Ext.define('Webinar.model.FlashVideo', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'status',
        type: 'string'
    },{
        name: 'streamURL',
        type: 'string'
    },{
        name: 'room',
        type: 'string'
    }],

    events: {},

    /**
     * Задать статус пользователя (вещать/смотреть)
     * @param status
     */
    setStatus: function(status) {
        this.set('status', status);
    },

    /**
     * Получить статус
     * @return {String} Статус пользователя
     */
    getStatus: function() {
        return this.get('status');
    },

    /**
     * Задать адрес сервера потокового вещания
     * @param streamURL {String} Адрес сервера
     */
    setStreamURL: function(streamURL) {
        this.set('streamURL', streamURL);
    },

    /**
     * Получить адрес сервера для потокового вещания
     * @return {String} Адрес сервера
     */
    getStreamURL: function() {
        return this.get('streamURL');
    },

    /**
     * Задать идентификатор комнаты для вещания
     * @param room {String} Идентификатор комнаты
     */
    setRoom: function(room) {
        this.set('room', room);
    },

    /**
     * Получить идентификатор комнаты для вещания
     * @return {String} Идентификатор комнаты
     */
    getRoom: function() {
        return this.get('room');
    }
});