var db = require('./database.js').Database;

db.Application.findAll().success(function(apps) {
    console.log(apps);
});

exports.ServerLogic = {

};