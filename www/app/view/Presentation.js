Ext.define('Webinar.view.Presentation', {
    extend: 'Ext.window.Window',
    itemId: 'PresentationView',
    layout: 'fit',
    title: 'Видео',
    maximizable: true,

    initComponent: function() {

        this.bbar = [
            {
                xtype: 'button',
                text: 'В начало',
                itemId: 'presentationBeginButton'
            },
            {
                xtype: 'button',
                text: 'Назад',
                itemId: 'presentationPreviousButton'
            },
            {
                xtype: 'numberfield',
                width: 50
            },
            {
                xtype: 'button',
                text: 'Далее',
                itemId: 'presentationNextButton'
            },
            {
                xtype: 'button',
                text: 'В конец',
                itemId: 'presentationLastButton'
            }
        ];

        this.items = [{
            xtype: 'panel',
            itemId: 'presentationPanel',
            layout: 'fit',
            items: [{
                xtype: 'flash',
                id: 'presentationFlash',
                url: 'http://static.slidesharecdn.com/swf/ssplayer2.swf',
                wmode: 'transparent',
                flashVars: {
                    doc: "thirst-upload-800x600-1215534320518707-8",
                    startSlide: 1,
                    rel: 0
                }
            }]
         }];

        this.callParent();
    }
});