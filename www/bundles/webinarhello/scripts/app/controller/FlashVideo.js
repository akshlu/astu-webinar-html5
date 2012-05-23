Ext.define('Webinar.controller.FlashVideo', {
    extend: 'Ext.app.Controller',
    models: ['FlashVideo'],
    stores: ['FlashVideo'],


    init: function() {
        var me = this;
        this.store = this.getFlashVideoStore();
        this.model = this.store.first();

        this.control({
            '#flashVideo': {
                afterrender: function() {
                    me.initComponents();
                }
            },

            '#FlashVideoOnButton': {
                click: function() {
                    me.model.setStreamURL(Webinar.currentSession.streamURL);
                    me.model.setStatus(Webinar.currentSession.status);
                    me.model.setRoom(Webinar.currentSession.id_webinar);
                    me.flashVideo.init(
                        me.model.getStatus(),
                        me.model.getStreamURL(),
                        me.model.getRoom()
                    );
                }
            }
        });
    },

    initComponents: function() {
        this.flashVideo = Ext.ComponentQuery.query("#flashVideo")[0].swf.dom;
    }
});