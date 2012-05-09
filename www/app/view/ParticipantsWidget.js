Ext.define('Webinar.view.ParticipantsWidget', {
    extend: 'Ext.window.Window',
    alias: 'webinar_participants_widget',
    title: 'Участники',
    layoyt: 'fit',

    initComponent: function() {

        var grid = Ext.create('Ext.grid.Panel', {
            itemId: 'webinar_participants_grid',
            model: Ext.ModelManager.getModel('Participants'),
            store: Ext.StoreManager.lookup('Participants'),
            height: 200,
            layout: 'fit',
            columns: [
                {
                    text: 'Имя',
                    dataIndex: 'first_name'
                },
                {
                    text: 'Фамилия',
                    dataIndex: 'last_name'
                }
            ]
        });

        this.items = [
            grid
        ];

        this.callParent();
    }
});