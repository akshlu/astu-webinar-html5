Ext.define('Webinar.store.Presentation', {
    extend: 'Webinar.store.WebinarStore',
    name: 'Presentation',
    model: 'Webinar.model.Presentation',

    fields: ['url', 'currentSlide'],

    events: {
        StateRestored: 'PresentationStateRestored'
    },

    data: [{
        url: 'thirst-upload-800x600-1215534320518707-8',
        currentSlide: 1
    }],

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
    },

    communicateData: function(connectionManager, event, data) {
        connectionManager.send(event, data);
    }

});