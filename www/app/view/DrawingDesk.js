Ext.define("Webinar.view.DrawingDesk", {
    extend: "Ext.window.Window",
    store: 'DrawingDesk',
    title: "Доска для рисования",
    layout: 'fit',
    alias: 'widget.drawingdesk',
    itemId: 'drawingdesk',
    maximizable: true,

    initComponent: function() {

        var picker = Ext.create("Ext.picker.Color", {
            itemId: "drawingDeskPicker",
            value: "000000"
        });

        var colorPicker = Ext.create("Ext.menu.ColorPicker", {
            itemId: "drawingDeskColorPicker"
        });

        var colorButton = Ext.create("Ext.button.Button", {
            text: "Цвет",
            menu: colorPicker
        });

        var clearButton = Ext.create("Ext.button.Button", {
            itemId: "drawingDeskClearButton",
            text: "Очистить все"
        });

        var slider = Ext.create("Ext.slider.Single", {
            itemId: "drawingDeskSlider",
            width: 200,
            value: 3,
            increment: 1,
            minValue: 1,
            maxValue: 100,
            fieldLabel: "Толщина",
            labelWidth: 60
        });

        var penButton = Ext.create('Ext.button.Button', {
            itemId: 'drawingDeskPenButton',
            enableToggle: true,
            toggleGroup: 'toolGroup',
            text: 'Карандаш',
            listeners: {
                'toggle': function(button, pressed) {
                }
            }
        });

        var eraserButton = Ext.create('Ext.button.Button', {
            itemId: 'drawingDeskEraserButton',
            enableToggle: true,
            toggleGroup: 'toolGroup',
            text: 'Ластик'
        });

        var cancelButton = Ext.create('Ext.button.Button', {
            itemId: 'drawingDeskCancelButton',
            text: 'Отменить'
        });

        this.tbar = [
            colorButton, clearButton, penButton, eraserButton, slider, cancelButton
        ];

        var drawableComponent = Ext.create("Ext.draw.Component", {
            viewBox: false,
            width: 800,
            height: 600,
            renderTo: document.body,
            itemId: "drawingDeskDrawableComponent"
        });

        var drawablePanel = Ext.create("Ext.panel.Panel", {
            itemId: "drawingDeskDrawablePanel",
            items: [
                drawableComponent
            ]
        });

        this.items = [
            drawablePanel
        ];

        this.callParent();
    }
});