Ext.Loader.setConfig({
    enabled: true
});

/**
 * Главный класс приложения
 */
Ext.application({
    name: "Webinar",
    appFolder: '/bundles/webinarhello/scripts/app',

    controllers: [
        'DrawingDesk', 'ParticipantsWidget', 'Chat', 'Presentation'
    ],

    /**
     * Запуск приложения
     */
    launch: function() {

        var me = this;

        Ext.MessageBox.show({
            msg: 'Пожалуйста подождите. Идет подключение к серверу',
            progressText: 'Идет подключение к серверу...',
            width:300,
            wait:true,
            waitConfig: {interval:100}
        });

        Webinar.configurator = Ext.create("Webinar.Configurator");

        Webinar.configurator.on({
            'getSession': function(session) {
                Webinar.currentSession = session;
                console.log(Webinar.currentSession);
                Webinar.connector = Webinar.configurator.getConnection();
                Webinar.connector.on({
                        'connect': function() {
                            Ext.create("Webinar.view.Viewport");
                        },
                        'disconnect': function() {
                            me.showError();
                        }
                    }
                );
                Webinar.connector.connect();
            },
            'noSession': function() {
                me.showError();
            }
        });
        Webinar.configurator.getSession();
    },

    /**
     * Вывести сообщение о невозможности подключиться к серверу
     */
    showError: function() {
        Ext.MessageBox.show({
            title: 'Ошибка подключения',
            msg: 'Невозможно подключиться к серверу',
            buttons: Ext.MessageBox.OK,
            icon: Ext.MessageBox.ERROR
        });
    }
});