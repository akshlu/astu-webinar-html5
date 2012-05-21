Ext.define('Webinar.state.DrawingDeskStateManager', {
    extend: 'Webinar.state.StateManager',

    saveState: function(object) {
        return {
            color: '#000000'
        };
    },

    restoreState: function(object) {

    }
});