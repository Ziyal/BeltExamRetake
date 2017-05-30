var mongoose = require("mongoose");


var UserSchema = mongoose.Schema({
    name: {type: String, requred: [true, 'Name is required']}, 
}, {timestamps: true})


mongoose.model("User", UserSchema)
