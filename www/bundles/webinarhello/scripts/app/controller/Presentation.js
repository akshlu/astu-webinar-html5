Ext.define('Webinar.controller.Presentation', {
    extend: 'Ext.app.Controller',
    model: 'Presentation',
    stores: [
        'Presentation'
    ],

    init: function() {
        var me = this;

        this.store = this.getPresentationStore();
        this.model = this.store.first();

        this.control({
            '#presentationFlash': {
                render: function() {
                    me.flashContatiner = Ext.ComponentQuery.query("#presentationFlash")[0];
                    me.flashContatiner.flashVars['doc'] = me.model.getUrl();
                },
                afterrender: function() {
                    me.initComponents();
                }
            }
        });
    },

    initComponents: function() {
        var me = this;

        Webinar.connector.on(this.store.events.StateRestored, function(data) {
            me.store.loadData([data]);
            me.updateUI();
        });

        this.flashMovie = this.flashContatiner.swf.dom;

        var flashDiv = Ext.getDom('presentationFlash');
        flashDiv.addEventListener('mouseup', function() {
            setTimeout(function() {
                me.model.setCurrentSlide(me.flashMovie.getCurrentSlide());
                me.store.communicateData(
                    Webinar.connector,
                    me.model.events.ChangedCurrentSlide,
                    me.store.first().data
                );
                if (Webinar.currentSession.status == 'owner') {
                    me.store.saveState(Webinar.connector);
                }
            }, 100);
        });

        Webinar.connector.on(this.model.events.ChangedCurrentSlide, function(event) {
            me.store.loadData([event.message]);
            me.updateUI();
        });

        this.store.restoreState(Webinar.connector);
    },

    updateUI: function() {
        this.model = this.store.first();
        var me = this;
        if (this.flashMovie.jumpTo) {
            this.flashMovie.jumpTo(this.model.getCurrentSlide());
        } else {
            setTimeout(function() {
                me.updateUI();
            }, 100);
        }
    }
});