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
            name: 'pages',
            type: 'auto'
        },
        {
            name: 'currentPage',
            type: 'int'
        }
    ],

    /**
     * События модели доски для рисования
     */
    events: {
        /**
         * Изменение состояния модели доски для рисования
         */
        ModelChangedEvent: 'ModelChangedEvent',

        /**
         * Событие изменения текущей страницы
         */
        CurrentPageChangedEvent: 'CurrentPageChangedEvent'
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
    setSprites: function(page, sprites) {
        this.getPage(page).sprites = sprites;
        //this.set('sprites', sprites);
        this.fireChangedEvent();
    },

    /**
     * Получить массив спрайтов, присутствующих на доске
     * @return {Array} Массив спрайтов
     */
    getSprites: function(page) {
        var sprites = this.getPage(page).sprites;
        var copySprites = [];
        var tmpSprite = {};
        var currentSprite = {};
        var i = 0;
        for(i = 0; i < sprites.length; i++) {
            tmpSprite = {};
            currentSprite = sprites[i];
            for(var property in currentSprite) {
                tmpSprite[property] = currentSprite[property];
            }
            copySprites.push(tmpSprite);
        }
        return copySprites;
    },

    /**
     * Очистить содержимое доски для рисования
     */
    clearSurface: function(page) {
        this.getPage(page).sprites = [];
    },

    /**
     * Нарисовать элемент на доске для рисования
     * @param sprite {Object} Добавляемый элемент
     */
    addSprite: function(page, sprite) {
        var copySprite = {};
        for(var property in sprite) {
            if (typeof property !== "function") {
                copySprite[property] = sprite[property];
            }
        }
        this.getPage(page).sprites.push(copySprite);
        this.fireChangedEvent();
    },

    /**
     * Удалить элемент с доки для рисования
     * @param sprite {Object} Удаляемый элемент
     */
    removeSprite: function(page, sprite) {
        Ext.Array.remove(this.getPage(page).sprites, sprite);
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
     * Получить страницу с заданным номером index
     * @param index {Number} Номер страницы
     * @return {Object} Объект страницы
     */
    getPage: function(index) {
        return this.getPages()[index - 1];
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
     * Задать текущую страницу
     * @param currentPage {Number} Номер текущей страницы
     */
    setCurrentPage: function(currentPage) {
        this.set('currentPage', currentPage);
    },

    /**
     * Получить номер текущей страницы
     * @return {Number} Номер текущей страницы
     */
    getCurrentPage: function() {
        return this.get('currentPage');
    },

    /**
     * Возбудить событие изменения модели
     */
    fireChangedEvent: function() {
        this.fireEvent(this.events.ModelChangedEvent, this);
    }
});