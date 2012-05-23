Ext.define("Webinar.store.DrawingDesk", {
    extend: "Ext.data.Store",
    model: "Webinar.model.DrawingDesk",

    name: 'DrawingDesk',

    fields: [
        'currentColor', 'thickness', 'pages', 'sprites'
    ],

    events: {
        StateRestored: 'DrawingDeskStateRestored'
    },

    data: [{
        currentColor: "#000000",
        thickness: 3,
        pages: [],
        currentPage: 1
    }],

    communicateData: function(connection, event, data) {
        connection.send(event, data);
    },

    saveState: function(connectionManager) {
        connectionManager.saveState(
            this.name,
            this.first().data
        );
    },

    restoreState: function(connectionManager) {
        connectionManager.restoreState(
            this.name,
            this.events.StateRestored
        );
    }

});