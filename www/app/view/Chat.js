Ext.define('Webinar.view.Chat', {
    extend: 'Ext.window.Window',
    itemId: 'chat',
    title: ' Текстовый чат',
    layout: 'fit',
    maximizable: true,

    initComponent: function() {

        var mainPanel = Ext.create('Ext.panel.Panel', {
            layout: 'border',
            defaults: {
                collapsible: true,
                split: true
            },
            items: [
                {
                    region: 'south',
                    height: 100,
                    minSize: 100,
                    maxSize: 250,
                    layout: 'fit',
                    items: [
                        {
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'textareafield',
                                    enableKeyEvents: true,
                                    itemId: 'chatInputTextArea',
                                    autoScroll: true,
                                    flex: 1
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'chatSendButton',
                                    text: 'Отправить',
                                    width: 100,
                                    height: 30,
                                    maxHeight: 30,
                                    margin: '0 0 0 5'
                                }
                            ]
                        }
                    ]
                },
                {
                    collapsible: false,
                    region:'center',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'textareafield',
                            itemId: 'chatLogTextArea',
                            readOnly: true,
                            autoScroll: true
                        }
                    ]
                }
            ]
        });

        this.items = [
            mainPanel
        ];

        this.callParent();

    }
});