Ext.define('Webinar.store.WebinarStore', {
    extend: 'Ext.data.Store',

    saveState: function(application, data) {
        throw new Error("Not implement");
    },

    restoreState: function(application, data) {
        throw new Error("Not implement");
    }
});