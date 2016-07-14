var app = angular.module("MainApp");
app.service("tokenService", [ function() {
    this.getToken = function() {
        var token = localStorage.getItem("token")
        if (token) {
            return true
        } else {return false}
    }
    this.setToken = function(user) {
        localStorage.setItem("token", user.token)
    }
    this.removeToken = function() {
        localStorage.removeItem("token")
    }
}])


