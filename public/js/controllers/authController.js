var app = angular.module("MainApp");

app.controller("authController", ["$scope","authService", "$location", function($scope, authService, $location) {
    $scope.signUp = function (user) {
        authService.signUp(user).then(function(data) {
        })
    }
    $scope.signIn = function (user) {
        authService.logIn(user).then(function(data) {
            console.log(data);
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            $location.path("/home");
        })
    }
}])