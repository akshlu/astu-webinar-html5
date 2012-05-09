Ext.define("Webinar.store.DrawingDesk", {
    extend: "Ext.data.Store",
    model: "Webinar.model.DrawingDesk",

    fields: [
        'currentColor', 'thickness', 'sprites'
    ],

    data: [{
        currentColor: "#000000",
        thickness: 3,
        sprites: [],
        pages: [{
            sprites: []
        }]
    }],

    communicateData: function(connection, event, data) {
        connection.send(event, data);
    },

    saveState: function() {

    },

    restoreState: function() {

    }

});