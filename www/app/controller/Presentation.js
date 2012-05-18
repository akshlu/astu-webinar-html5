Ext.define('Webinar.controller.Presentation', {
    extend: 'Ext.app.Controller',
    model: 'Presentation',

    init: function() {
        var me = this;
        this.control({
            '#presentationFlash': {
                render: function() {
                    me.initComponents();
                }
            }
        });
    },

    initComponents: function() {
        this.initFlashContatiner();
    },

    initFlashContatiner: function() {
        this.flashContatiner = Ext.ComponentQuery.query("#presentationFlash")[0];
        console.log(this.flashContatiner);
    }

});