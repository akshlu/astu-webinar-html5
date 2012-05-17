var Sequelize = require('sequelize');

var sequelize = new Sequelize('webinar', 'root', '123', {
    host: "127.0.0.1",
    port: 3306,
    logging: console.log,
    dialect: 'mysql'
});

var defaultOptions = {
    timestamps: false,
    freezeTableName: true
};

var primaryKeyOptions = {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
};

var Application = sequelize.define('application', {
    id_application: primaryKeyOptions,
    name: Sequelize.TEXT,
    alias: Sequelize.TEXT
}, defaultOptions);

var Controller = sequelize.define('controller', {
    id_controller: primaryKeyOptions,
    name: Sequelize.TEXT,
    id_application: {type: Sequelize.INTEGER, foreignKey: true}
}, defaultOptions);

var User = sequelize.define('user', {
    id_user:  primaryKeyOptions,
    firstname: Sequelize.TEXT,
    lastname: Sequelize.TEXT
}, defaultOptions);

var State = sequelize.define('state', {
    id_state: primaryKeyOptions,
    time: Sequelize.TEXT,
    data: Sequelize.TEXT,
    application_id_application: {type: Sequelize.INTEGER},
    webinar_id_webinar: {type: Sequelize.INTEGER}
}, defaultOptions);

exports.Database = {
    sequelize: sequelize,
    Application: Application,
    Controller: Controller,
    User: User,
    State: State
};