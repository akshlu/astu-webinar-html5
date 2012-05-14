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
            url: 'Nirs.swf',
            wmode: 'transparent'
        }];
        this.callParent();
    }
});