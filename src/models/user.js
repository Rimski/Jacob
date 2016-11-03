var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: "data:image/jpeg;base64,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"
    },
    admin: {
        type: Boolean,
        default: false,
        required: true,
    }
})

//User.pre("save", function (next) {
//    var user = this;
//    if (!user.isModified("password")) {
//        return next();
//    } else {
//        bcrypt.hash(user.password, 12, function (err, hash) {
//            if (err) return next(err);
//            user.password = hash;
//            next();
//        });
//    }
//});

User.methods.noPassword = function () {
    var user = this.toObject();
    delete user.password;
    return user;
}

module.exports = mongoose.model("User", User);