Ext.define("Webinar.controller.DrawingDesk", {
    extend: "Ext.app.Controller",
    models: [
        'DrawingDesk'
    ],
    stores: [
        'DrawingDesk'
    ],

    stateManager: Ext.create('Webinar.state.DrawingDeskStateManager'),

    init: function() {

    },

    events: {
        DRAW: 'DrawingDeskDrawEvent',
        CLEAR: 'DrawingDeskClearEvent'
    },

    /**
     * При запуске представления доски для рисования
     */
    onLaunch: function() {

        var me = this;

        var store = this.getDrawingDeskStore();
        this.model = store.first();

        this.control({
            '#drawingDeskClearButton': {
                scope: this,
                click: function() {
                    Webinar.connector.send(
                        me.events.CLEAR);
                    me.clearSurface();
                }
            },
            '#drawingdesk': {
                scope: this,
                render: function() {
                    me.initComponents();
                }
            },
            '#drawingDeskPenButton': {
                click: function() {

                }
            }
        });

    },

    /**
     * Инициализировать компоненты доски для рисования
     */
    initComponents: function() {
        this.drawingdesk = Ext.ComponentQuery.query("#drawingdesk")[0];
        if (this.drawingdesk) {
            this.initPicker();
            this.initColorPicker();
            this.initSurface();
        }

        this.spritesArray = [];

        var drawableComponent = this.drawingdesk.getComponent("drawingDeskDrawablePanel").getComponent("drawingDeskDrawableComponent");
        var me = this;
        this.drawingdesk.on({
            'resize': function(object, width, height) {
                drawableComponent.setSize(width, height);
            }
        });

        this.initNetworkHandlers();
    },

    clearSurface: function() {
        this.surface.removeAll();
    },

    initPicker: function() {
        this.picker = this.getPicker();

    },

    initColorPicker: function() {
        this.colorPicker = this.getColorPicker();
        var picker = this.picker;
        this.colorPicker.on({
            'select': function(object, color) {
                picker.select(color);
            }
        });
    },

    initSurface: function() {
        this.surface = this.getSurface();
        var surface = this.surface;
        this.drawableComponent = this.drawingdesk.getComponent("drawingDeskDrawablePanel").
            getComponent("drawingDeskDrawableComponent");
        var controller = this;
        var me = this;

        this.isMouseDown = false;
        this.oldMouseCoordinates = {
            x: null,
            y: null
        };

        surface.on({
            'mousedown': function(event) {
                var mouseCoordinates = me.getMouseCoordinates(event);

                var drawingObject = {
                    type: 'circle',
                    radius: me.getThickness() / 2,
                    fill: controller.getColor(),
                    x: mouseCoordinates.x,
                    y: mouseCoordinates.y
                };

                Webinar.connector.send(me.events.DRAW,drawingObject);

                surface.add(drawingObject).show(true);
                me.oldMouseCoordinates = mouseCoordinates;
                controller.isMouseDown = true;
            },
            'mousemove': function(event) {
                if (controller.isMouseDown) {
                    var mouseCoordinates = me.getMouseCoordinates(event);

                    var drawingObject = {
                        type: 'path',
                        path: ['M ' + me.oldMouseCoordinates.x + ' ' + me.oldMouseCoordinates.y + ' L ' + mouseCoordinates.x + ' ' + mouseCoordinates.y].join(''),
                        stroke: me.getColor(),
                        'stroke-width': me.getThickness(),
                        'stroke-linecap': 'round'
                    };

                    me.spritesArray.push(drawingObject);

                    Webinar.connector.send(
                        me.events.DRAW,
                        drawingObject
                    );

                    surface.add(drawingObject).show(true);

                    me.oldMouseCoordinates = mouseCoordinates;
                }
            },
            'mouseup': function(event) {
                me.isMouseDown = false;
            }/*,
            'mouseleave': function(event) {
                me.isMouseDown = false;
                console.log('mouse leave');
            }*/
        });

    },

    initNetworkHandlers: function() {
        var me = this;
        Webinar.connector.on(this.events.DRAW, function(event) {
            me.surface.add(event.message).show(true);
        });

        Webinar.connector.on(this.events.CLEAR, function() {
            me.clearSurface();
        });
    },

    getSurface: function() {
        return this.drawingdesk.
            getComponent("drawingDeskDrawablePanel").
            getComponent("drawingDeskDrawableComponent").surface;
    },


    getColor: function() {

        /*if (this.picker) {
            return "#" + this.picker.getValue();
        } else {
            return "#000000";
        }*/
        return this.model.getCurrentColor();
    },

    getPicker: function() {
        return Ext.ComponentQuery.query("#drawingDeskPicker")[0];
    },

    getColorPicker: function() {
        return Ext.ComponentQuery.query("#drawingDeskColorPicker")[0];
    },

    getThickness: function() {
        return Ext.ComponentQuery.query("#drawingDeskSlider")[0].getValue();
    },

    getMouseCoordinates: function(event) {
        var x = event.browserEvent.clientX - this.drawableComponent.el.getXY()[0];
        var y = event.browserEvent.clientY - this.drawableComponent.el.getXY()[1];
        return {
            x: x,
            y: y
        }
    }


});