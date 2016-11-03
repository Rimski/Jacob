var express = require("express");
var userRouter = express.Router();
var User = require("../models/user");

userRouter.get("/", function(req, res) {
    User.find({}, function(err, users){
        if (err) {res.status(500).send(err)}
        else {
            var sendableUsers = function(users) {
                var newUsers = [];
                for (var i = 0; i < users.length; i++) {
                    newUsers.push(users[i].noPassword());
                }
                return newUsers;
            }
            res.send(sendableUsers(users));
        }
    })
})



userRouter.delete("/:id", function(req, res) {
    var admin = false;
    User.findOne({
        username: req.user.username
    }, function(err, user) {
        if (user.admin === true){
            admin = true
        }
    })
    if (admin === true) {
        User.findOneAndRemove({_id: req.params.id})
    } else {res.status(401).send("You must be an administratior to delete users.")}
})

module.exports =("userRouter", userRouter)