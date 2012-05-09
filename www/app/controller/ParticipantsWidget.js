Ext.define('Webinar.controller.ParticipantsWidget', {
    extend: 'Ext.app.Controller',

    onLaunch: function() {
        var grid = Ext.ComponentQuery.query("#webinar_participants_grid")[0];
    }

});