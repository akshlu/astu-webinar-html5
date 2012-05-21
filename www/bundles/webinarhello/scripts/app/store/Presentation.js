Ext.define('Webinar.store.Presentation', {
    extend: 'Webinar.store.WebinarStore',
    name: 'Presentation',
    model: 'Webinar.model.Presentation',

    fields: ['url', 'currentSlide'],

    events: {
        StateRestored: 'PresentationStateRestored'
    },

    data: [{
        url: 'http://static.slidesharecdn.com/swf/ssplayer2.swf',
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