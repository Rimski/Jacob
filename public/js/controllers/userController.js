var app = angular.module("MainApp");

app.controller("userController", ["$scope", "userService", function ($scope, userService) {
    userService.getUsers().then(function (users) {
        $scope.users = users;
    })
    $scope.currentUser = JSON.parse(localStorage.getItem("user"));
    
    console.log($scope.currentUser);
    
    $scope.delete = function (user) {
        userService.deleteUser(user).then(function (data) {
            console.log(data);
        })
    }
}])