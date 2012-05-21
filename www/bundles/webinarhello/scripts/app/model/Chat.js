/**
 * Модель текстового чата
 */
Ext.define('Webinar.model.Chat', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'messages',
            type: 'auto'
        }
    ],

    events: {
        ChatAddMessageEvent: 'ChatMessageEvent',
        ChatAskHistoryEvent: 'CahtAskHistoryEvent',
        ChatGetHistoryEvent: 'ChatGetHistoryEvent'
    },

    /**
     * Задать сообщения
     * @param messages
     */
    setMessages: function(messages) {
        this.set('messages', messages);
    },

    /**
     * Получить сообщения
     * @return {Array} Массив сообщений
     */
    getMessages: function() {
        return this.get('messages');
    },

    /**
     * Добавить сообщение
     * @param who {String} Имя отправителя
     * @param date {Date} Дата отправления
     * @param text {String} Текст сообщения
     */
    addMessage: function(who, date, text) {
        this.getMessages().push({
            who: who,
            date: date,
            text: text
        });
    }
});

Webinar.model.Chat.events = {
    ChatAddMessageEvent: 'ChatMessageEvent',
    ChatAskHistoryEvent: 'CahtAskHistoryEvent',
    ChatGetHistoryEvent: 'ChatGetHistoryEvent'
};