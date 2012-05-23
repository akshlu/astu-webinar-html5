Ext.define('Webinar.store.FlashVideo', {
    extend: 'Webinar.store.WebinarStore',
    model: 'Webinar.model.FlashVideo',
    name: 'FlashVideo',

    fields: ['status', 'streamURL', 'room'],

    events: {
        StateRestored: 'FlashVideoStateRestored'
    },

    data: [{
        status: '',
        streamURL: '',
        room: ''
    }],

    /**
     * Сохранить состояние приложения
     * @param connectionManager {ConnectionManager} Объект соединения с сервером
     */
    saveState: function(connectionManager) {
        connectionManager.saveState(
            this.name,
            this.first().data
        );
    },

    /**
     * Восстановить состояние приложения
     * @param connectionManager {ConnectionManager} Объект соединения с сервером
     */
    restoreState: function(connectionManager) {
        connectionManager.restoreState(
            this.name,
            this.events.StateRestored
        );
    },

    /**
     * Отправить информацию, связанную с данным приложением, другим участникам вебинара
     * @param connectionManager {ConnectionManager} Объект соединения с сервером
     * @param event {String} Типа события
     * @param data {Object}
     */
    communicateData: function(connectionManager, event, data) {
        connectionManager.send(event, data);
    }
});