var mongoose = require("mongoose");
var User = mongoose.model("User");
var session = require('express-session');

module.exports = {
    login: function(req, res) {
        console.log("Controller: ", req.body.name)
        User.findOne({name: req.body.name})
            .then(user => {
                if(user){
                    console.log("MATCHING USER", user)
                    req.session.user = user;
                    res.json(true);
                } else {
                    let new_user = new User(req.body)
                    console.log("NEW USER", new_user)
                    new_user.save()
                        .catch(err => {
                            console.log("Save user error", err)
                            res.status(500).json
                        })
                        .then(() => {
                            console.log("Save User")
                            req.session.user = new_user;
                            res.json(true);
                        })
                }
            })
            .catch(err => {
                console.log("No matching user", err)
                res.status(500).json(err)
            })
    },

    CheckStatus: (req, res) => { res.json(req.session.user) },

    logout: (req, res) => {
        req.session.destroy();
        res.json(true);
    }
}
