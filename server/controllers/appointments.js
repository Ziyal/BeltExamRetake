var mongoose = require("mongoose");
var Appointment = mongoose.model("Appointment");
var session = require('express-session');
var validator = require('validator');

module.exports = {

    create: (req, res) => {
        console.log("Controller Hit")

        var appointment = new Appointment({date: req.body.date, time: req.body.time, patient: req.session.user.name, complaint: req.body.complaint})

        appointment.save()
                .then(() => {
                    console.log("Appointment Added")
                    res.json(true)
                })
                .catch(err => {
                    res.status(500).json(err)
                })
    },

    get: (req, res) => {
        Appointment.find({})
            .then(appointments => { res.json(appointments) })
            .catch(err => {
                console.log("ERRORS")
                res.status(500).json(err)
            })
    },

    remove: (req, res) => {
        Appointment.remove({_id: req.params.id})
            .then(() => res.json(true))
            .catch(err => { console.log("Delete Error") })
    }
}
