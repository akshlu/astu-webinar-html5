Ext.define('Webinar.store.Presentation', {
    extend: 'Webinar.store.WebinarStore',

    model: 'Webinar.model.Presentation',

    fields: ['url', 'currentSlide'],

    data: [{
        url: '',
        currentSlide: 1
    }]

});