var express = require("express");
var gameRouter = express.Router();
var Game = require("../models/game");
var User = require("../models/user");
gameRouter.post("/", function (req, res) {
    User.findOne({
        _id: req.user._id
    }, function (err, user) {
        if (err) {
            res.send(err)
        } else {
            console.log(user);
            if (user.admin === true) {
                console.log("is admin");
                Game.findOne({
                    title: req.body.title
                }, function (err, game) {
                    if (err) {
                        res.status(503).send(err)
                    } else {
                        if (game) {
                            res.status(418).send("Game already Exists")
                        } else {
                            newGame = new Game(req.body);
                            newGame.save(function (err, game) {
                                if (err) {
                                    res.status(504).send(err)
                                } else {
                                    res.send({
                                        success: true,
                                        message: "new Game Created",
                                        game: newGame
                                    })
                                }
                            })

                        }
                    }
                })
            } else {
                res.status(401).send("You Must be an administratior to add games.");
            }
        }
    })
});

gameRouter.get("/", function (req, res) {
    Game.find({}, function (err, games) {
        if (err) {
            res.status(404).send(err)
        } else {
            res.send({
                success: true,
                games: games
            })
        }
    })
})

gameRouter.delete("/:id", function (req, res) {
    User.findOne({
        username: req.user.username
    }, function (err, user) {
        if (err) {
            res.send(err)
        } else if (user.admin === true) {
            Game.findOneAndRemove({
                _id: req.params.id
            }, function (err, game) {
                res.send({
                    success: true,
                    message: "succsesfully deleted",
                    game: game
                })
            })
        } else {
            res.status(401).send("You Must be an administratior to delete games.")
        }
    })
})

module.exports = ("gameRouter", gameRouter);