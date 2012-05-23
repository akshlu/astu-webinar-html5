Ext.define('Webinar.view.FlashVideo', {
    extend: 'Ext.window.Window',
    itemId: 'FlashVideoView',
    layout: 'fit',
    title: 'Видео',
    maximizable: true,

    initComponent: function() {

        this.tbar = [{
            xtype: 'button',
            itemId: 'FlashVideoOnButton',
            text: 'Включить видео'
        }];

        this.items = [{
            xtype: 'flash',
            itemId: 'flashVideo',
            url: '/bundles/webinarhello/flash/VideoWidget.swf',
            flashParams: {
                allowScriptAccess: 'always',
                wmode: 'transparent'
            }
        }];

        this.callParent();
    }
});