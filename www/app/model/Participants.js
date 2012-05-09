Ext.define("Webinar.model.Participants", {
    extend: "Ext.data.Model",

    fields: [
        {
            name: 'id',
            type: 'Number'
        },
        {
            name: 'first_name',
            type: 'String'
        },
        {
            name: 'last_name',
            type: "String"
        }
    ]
});