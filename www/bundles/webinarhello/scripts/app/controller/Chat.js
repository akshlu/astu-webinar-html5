Ext.define('Webinar.controller.Chat', {
    extend: 'Ext.app.Controller',

    models: [
        'Chat'
    ],

    stores: [
        'Chat'
    ],

    /**
     * Инициализировать контроллер
     */
    init: function() {
        var me = this;
        this.control({
            '#chat': {
                render: function() {
                    me.initComponents();
                }
            }
        });
    },

    /**
     * Инициализировать компоненты
     */
    initComponents: function() {
        this.store = this.getChatStore();

        var me = this;

        Webinar.connector.on(me.store.events.StateRestored, function(data) {
            console.log('chat restore state');
            me.store.loadData([data]);
            me.updateUI();
        });

        Webinar.connector.on(Webinar.model.Chat.events.ChatAddMessageEvent, function(event) {
            var msg = event.message;
            if (msg) {
                var who = msg.who;
                var date = new Date(msg.date);
                var text = msg.text;
                me.store.first().addMessage(who, date, text);
                me.postMessageToUI(who, date, text);
            }
        });

        this.store.restoreState(Webinar.connector);

        this.initSendButton();
        this.initInputTextArea();
        this.logTextArea = this.getLogTextArea();

    },

    updateUI: function() {
        var i = 0;
        var messages = this.store.first().getMessages();
        for(i = 0; i < messages.length; i++) {
            this.postMessageToUI(
                messages[i].who,
                new Date(messages[i].date),
                messages[i].text
            );
        }
    },

    /**
     * Отправить сообщение
     */
    sendMessage: function() {
        var who = Webinar.currentSession.nameOfUser;
        var date = new Date();
        var text = Ext.String.trim(this.getInputTextArea().getValue().toString());
        if (text != '') {
            this.postMessageToUI(who, date, text);
            this.store.first().addMessage(who, date, text);
            this.store.communicateData(
                Webinar.connector,
                Webinar.model.Chat.events.ChatAddMessageEvent,
                {
                    who: who,
                    date: date,
                    text: text
                }
            );
            if (Webinar.currentSession.status == 'owner') {
                this.store.saveState(Webinar.connector);
            }
        }
    },

    /**
     * Опубликовать сообщение
     * @param who {String} Отправитель
     * @param date {Date} Дата отправления
     * @param text {String} Текст сообщения
     */
    postMessageToUI: function(who, date, text) {
        this.logTextArea.setValue(
            this.logTextArea.getValue() +
                who + ' [' + date.toLocaleTimeString() + ']: ' + text + '\n'
        );
        this.inputTextArea.setValue('');
    },

    /**
     * Инициализировать кнопку отправки сообщений
     */
    initSendButton: function() {
        var me = this;
        this.sendButton = this.getSendButton();
        this.sendButton.on({
            'click': function() {
                me.sendMessage();
            }
        })
    },

    /**
     * Инициализировать поле ввода
     */
    initInputTextArea: function() {
        var me = this;
        this.inputTextArea = this.getInputTextArea();
        this.inputTextArea.on({
            'keypress': function(object, event) {
                if (event.keyCode && event.keyCode == 10) {
                    me.sendMessage();
                }
            }
        });
    },

    /**
     * Получить кнопку отправки сообщений
     * @return {Object} Кнопка отправки сообщений
     */
    getSendButton: function() {
        return Ext.ComponentQuery.query("#chatSendButton")[0];
    },

    /**
     * Получить текстовое поле чата
     * @return {Object} Текстовое поле чата
     */
    getLogTextArea: function() {
        return Ext.ComponentQuery.query("#chatLogTextArea")[0];
    },

    /**
     * Получить текстовое поле для ввода сообщения для отправки в чат
     * @return {Object} Текстовое поле для ввода сообщения
     */
    getInputTextArea: function() {
        return Ext.ComponentQuery.query("#chatInputTextArea")[0];
    }
});