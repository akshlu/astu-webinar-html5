Ext.define('Webinar.view.Presentation', {
    extend: 'Ext.window.Window',
    itemId: 'PresentationView',
    layout: 'fit',
    title: 'Видео',
    maximizable: true,

    initComponent: function() {

        this.items = [{
            xtype: 'panel',
            itemId: 'presentationPanel',
            layout: 'fit',
            items: [{
                xtype: 'flash',
                id: 'presentationFlash',
                url: '',
                flashVars: {
                    doc: "thirst-upload-800x600-1215534320518707-8",
                    startSlide: 1,
                    rel: 0
                },
                flashParams: {
                    allowScriptAccess: 'always',
                    wmode: 'transparent'
                }
            }]
         }];

        this.callParent();
    }
});