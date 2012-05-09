Ext.define("Webinar.store.DrawingDesk", {
    extend: "Ext.data.Store",
    model: "Webinar.model.DrawingDesk",

    fields: [
        'currentColor', 'thickness', 'sprites'
    ],

    data: [{
        currentColor: "#444444",
        thickness: 3,
        sprites: []
    }],

    saveState: function() {

    },

    restoreState: function() {

    }

});