Ext.define('Webinar.store.Chat', {
    extend: 'Ext.data.Store',

    model: 'Webinar.model.Chat',

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

    saveState: function() {

    },

    restoreState: function() {

    }
});