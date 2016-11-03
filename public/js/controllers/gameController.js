var app = angular.module("MainApp");

app.controller("gameController", ["$scope", "gameService", function($scope, gameService) {
    $scope.gameService = gameService;
    gameService.getAll().then(function(data) {
        $scope.games = data.games;
    }, function(err){
        $scope.errors = err;
    })
    $scope.addGame = function (newGame){
        gameService.addOne(newGame).then(function(data) {
            console.log(data);
        })
    }
    
    $scope.currentUser = JSON.parse(localStorage.getItem("user"));
    console.log($scope.currentUser);
    $scope.delete = function(game) {
        gameService.deleteOne(game).then(function(data) {
            console.log(data);
        })
    }
}])