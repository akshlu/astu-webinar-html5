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

    events: {
        ChangedCurrentSlide: 'PresentationChangedCurrentSlide'
    },


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
        if (currentSlide >= 1) {
            this.set('currentSlide', currentSlide);
            this.fireEvent(this.events.ChangedCurrentSlide, currentSlide);
        }
    },

    /**
     * Получить текущий показываемый на экране слайд
     * @return {Number} Номер текущего слайда
     */
    getCurrentSlide: function() {
        return this.get('currentSlide');
    }

});