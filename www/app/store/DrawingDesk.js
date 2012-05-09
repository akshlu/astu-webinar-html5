Ext.define("Webinar.store.DrawingDesk", {
    extend: "Ext.data.Store",
    model: "Webinar.model.DrawingDesk",

    fields: [
        'currentColor', 'thickness'
    ],

    data: [{
        currentColor: "#444444",
        thickness: 3
    }],

    saveState: function() {

    },

    restoreState: function() {

    }

});