Ext.Loader.setConfig({
    enabled: true
});

/**
 * Главный класс приложения
 */
Ext.application({
    name: "Webinar",

    controllers: [
        'DrawingDesk', 'ParticipantsWidget', 'Chat'
    ],

    /**
     * Запуск приложения
     */
    launch: function() {

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
                Webinar.connector = Webinar.configurator.getConnection();
                Webinar.connector.on({
                        'connect': function() {
                            Ext.create("Webinar.view.Viewport");
                        },
                        'disconnect': function() {
                            Ext.MessageBox.show({
                                title: 'Ошибка подключения',
                                msg: 'Невозможно подключиться к серверу',
                                buttons: Ext.MessageBox.OK,
                                icon: Ext.MessageBox.ERROR
                            });
                        }
                    }
                );
                Webinar.connector.connect();
            }
        });
        Webinar.configurator.getSession();
    }
});