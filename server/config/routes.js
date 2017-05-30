var Users = require('../controllers/login.js')
var Appointments = require("../controllers/appointments.js")
var mongoose = require('mongoose');
var path = require("path")

module.exports = function(app){

    app.post("/login", Users.login)
    app.get("/login_status", Users.CheckStatus)
    app.get("/logout", Users.logout)

    app.get("/get_appointments", Appointments.get)
    app.post("/add_appointment", Appointments.create)
    app.delete("/delete/:id", Appointments.remove)

    app.get("*", function(req, res){
        res.sendFile(path.resolve("client/dist/index.html"))
    })    
}