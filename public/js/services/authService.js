var app = angular.module("MainApp");



app.service("authService", ["$http", function ($http) {
    var baseUrl = "/auth/"
    this.signUp = function (user) {
        return $http.post(baseUrl + "signup", user).then(function (responce) {
            return responce.data;
        })
    }
    this.logIn = function (user) {
        return $http.post(baseUrl + "login", user).then(function (responce) {
            return responce.data;
        })
    }
}])