/**
 * Модель доски для рисования
 */
Ext.define("Webinar.model.DrawingDesk", {
    extend: "Ext.data.Model",

    fields: [
        {
            name: 'currentColor',
            type: 'String'
        },
        {
            name: 'thickness',
            type: "Number"
        }
    ],

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
    },

    /**
     * Очистить содержимое доски для рисования
     */
    clearSurface: function() {
        throw new Error('Not implemented');
    },

    /**
     * Нарисовать элемент на доске для рисования
     * @param surface {Object} Добавляемый элемент
     */
    addSurface: function(surface) {
        throw new Error('Not implemented');
    },

    /**
     * Удалить элемент с доки для рисования
     * @param surface {Object} Удаляемый элемент
     */
    removeSurface: function(surface) {
        throw new Error('Not implemented');
    }
});