Ext.define("Webinar.view.Viewport", {
    extend: "Ext.container.Viewport",
    layout: 'fit',
    draggable: false,

    requires: [
        "Webinar.view.DrawingDesk"
    ],

    initComponent: function() {

        var desk = Ext.create("Webinar.view.DrawingDesk", {
            width: 500,
            height: 300
        });

        var participants = Ext.create('Webinar.view.ParticipantsWidget', {
            width: 300,
            height: 400,
            x: 0,
            y: 0
        });

        var chat = Ext.create('Webinar.view.Chat', {
            width: 300,
            height: 400
        });

        var panel = Ext.create("Ext.window.Window", {
            title: "Webinar",
            layout: 'fit',
            maximized: true,
            closable: false,
            tbar: [
                {
                    xtype: 'button',
                    text: 'Участники'
                },
                {
                    xtype: 'button',
                    text: 'Приложения',
                    menu: [
                        {
                            text: "Доска для рисования"
                        }
                    ]
                }
            ],
            items: [
                desk, participants, chat
            ]
        });

        panel.show();

        desk.show();
        //participants.show();
        //chat.show();

        this.items = [
            panel
        ];

        this.callParent();
    }

});