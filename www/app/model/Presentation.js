/**
 * Модель презентации SlideShare
 */
Ext.define('Webinar.model.Presentation', {
    extend: Ext.data.Model,

    fields: [{
        name: 'url',
        type: 'string'
    },{
        name: 'currentSlide',
        type: 'int'
    }],


    /**
     * Задать URL презентации
     * @param url {String} URL презентации
     */
    setUrl: function(url) {
        this.set('url', url);
    },

    /**
     * Получить URL презентации
     * @return {string} URL презентации
     */
    getUrl: function() {
        return this.get('url');
    },

    /**
     * Задать текущий показываемый на экране слайд
     * @param currentSlide {Number} Номер слайда
     */
    setCurrentSlide: function(currentSlide) {
        this.set('currentSlide', currentSlide);
    },

    /**
     * Получить текущий показываемый на экране слайд
     */
    getCurrentSlide: function() {
        this.get('currentSlide');
    }

});