var mongoose = require("mongoose");
var validator = require('validator');

var AppointmentSchema = mongoose.Schema({
    date: {
        type: Date,
        required: [true, "Date is required"],
        validate: function(value) {
            return validator.isAfter(value);
        },
        message: "Date must be in the future",
        validate: function(value) {
            
        }
    },

    time: {
        type: String,
        required: [true, "Time is required"],
    },

    patient: String,

    complaint: {
        type: String,
        required: [true, "Complaint is required"],
        minlength: [10, "Complain must be at least 10 characters"]
    },

}, {timestamps: true})


mongoose.model("Appointment", AppointmentSchema)
