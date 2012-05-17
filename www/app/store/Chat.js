Ext.define('Webinar.store.Chat', {
    extend: 'Webinar.store.WebinarStore',

    model: 'Webinar.model.Chat',

    events: {
        StateRestored: 'ChatStateRestored'
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

    saveState: function(connectionManager) {
        connectionManager.saveState(
            'Chat',
            this.first().data
        );
    },


    restoreState: function(connectionManager) {
        connectionManager.restoreState(
            'Chat',
            this.events.StateRestored
        );
    }
});