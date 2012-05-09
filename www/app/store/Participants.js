Ext.define('Webinar.store.Participants', {
    extend: 'Ext.data.Store',
    model: 'Webinar.model.Participants',

    fields: [
        'id', 'first_name', 'last_name'
    ],
    data: [
        {
            'id': 1,
            'first_name': 'Alexey',
            'last_name': 'Ustinov'
        },
        {
            'id': 2,
            'first_name': 'Anna',
            'last_name': 'Nemechenko'
        }
    ]

});