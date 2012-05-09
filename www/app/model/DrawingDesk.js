/**
 * Модель доски для рисования
 */
Ext.define("Webinar.model.DrawingDesk", {
    extend: "Ext.data.Model",

    fields: [
        {
            name: 'currentColor',
            type: 'string'
        },
        {
            name: 'thickness',
            type: "int"
        },
        {
            name: 'sprites',
            type: 'auto'
        },
        {
            name: 'pages',
            type: 'auto'
        }
    ],

    /**
     * События модели доски для рисования
     */
    events: {
        /**
         * Изменение состояния модели доски для рисования
         */
        ModelChangedEvent: 'ModelChangedEvent'
    },

    /**
     * Получить текущий цвет
     * @return {String} Текущий цвет
     */
    getCurrentColor: function() {
        return this.get('currentColor');
    },

    /**
     * Задать текущий цвет
     * @param currentColor Текущий цвет
     */
    setCurrentColor: function(currentColor) {
        this.set('currentColor', currentColor);
        this.fireChangedEvent();
    },

    /**
     * Получить ширину карандаша для рисования
     * @return {Number} Ширина карандаша
     */
    getThickness: function() {
        return this.get('thickness');
    },

    /**
     * Задать ширину карандаша для рисования
     * @param thickness Ширина карандаша для рисования
     */
    setThickness: function(thickness) {
        this.set('thickness', thickness);
        this.fireChangedEvent();
    },

    /**
     * Задать массив спрайтов для отображения на доске
     * @param sprites {Array} Массив спрайтов
     */
    setSprites: function(sprites) {
        this.set('sprites', sprites);
        this.fireChangedEvent();
    },

    /**
     * Получить массив спрайтов, присутствующих на доске
     * @return {Array} Массив спрайтов
     */
    getSprites: function() {
        return this.get('sprites');
    },

    /**
     * Очистить содержимое доски для рисования
     */
    clearSurface: function() {
        this.setSprites([]);
    },

    /**
     * Нарисовать элемент на доске для рисования
     * @param sprite {Object} Добавляемый элемент
     */
    addSprite: function(sprite) {
        this.getSprites().push(sprite);
        this.fireChangedEvent();
    },

    /**
     * Удалить элемент с доки для рисования
     * @param sprite {Object} Удаляемый элемент
     */
    removeSprite: function(sprite) {
        Ext.Array.remove(this.getSprites(), sprite);
        this.fireChangedEvent();
    },

    /**
     * Задать страницы
     * @param pages {Array} Массив страниц
     */
    setPages: function(pages) {
        this.pages.set('pages', pages);
    },

    /**
     * Получить массив страниц
     * @return {Array} Массив страниц
     */
    getPages: function() {
        return this.get('pages');
    },

    /**
     * Добавить новую страницу
     * @param page {Object} Добавляемая страница
     */
    addPage: function(page) {
        this.getPages().push(page);
    },

    /**
     * Получить пустую страницу
     * @return {Object} Объект пустой страницы
     */
    getBlankPage: function() {
        return {
            sprites: []
        };
    },

    /**
     * Возбудить событие изменения модели
     */
    fireChangedEvent: function() {
        this.fireEvent(this.events.ModelChangedEvent, this);
    }
});