Ext.define('Webinar.store.Chat', {
    extend: 'Webinar.store.WebinarStore',

    model: 'Webinar.model.Chat',

    events: {
        AskData: 'ChatStoreAskData',
        GetData: 'ChatStoreGetData'
    },

    fields: [
        'messages'
    ],

    data: [{
        messages: [
        ]
    }],

    communicateData: function(connection, event, data) {
        connection.send(event, data);
    },

    saveState: function(application, data) {

    },

    restoreState: function(application, data) {

    },

    /**
     * Синхронизировать данные с сервером
     */
    synchronize: function(connection) {
        console.log('ask data');
        connection.send(this.events.AskData);
    },

    shareData: function(connection, data) {
        console.log('share data');
        console.log(data);
        connection.send(this.events.GetData, data);
    }
});