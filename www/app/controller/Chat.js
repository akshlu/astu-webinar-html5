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
        this.model = this.store.first();

        var me = this;

        Webinar.connector.on(me.model.events.ChatAddMessageEvent, function(event) {
            var msg = event.message;
            if (msg) {
                me.postMessageToUI(
                    msg.who,
                    new Date(msg.date),
                    msg.text
                );
            }
        });

        this.initSendButton();
        this.initInputTextArea();
        this.logTextArea = this.getLogTextArea();

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
            this.model.addMessage(who, date, text);
            this.store.communicateData(
                Webinar.connector,
                this.model.events.ChatAddMessageEvent,
                {
                    who: who,
                    date: date,
                    text: text
                }
            );
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