var app = angular.module("MainApp");



app.service("gameService", ["$http", function($http) {
    var baseUrl = "/api/game/"
    this.getAll = function() {
        return $http.get(baseUrl).then(function(responce){
            return responce.data;
        })
    }
    this.deleteOne = function(game) {
        return $http.delete(baseUrl + game._id).then(function(responce){
            return responce.data;
        })
    }
    this.editOne = function(game) {
        return $http.put(baseUrl + game._id, game).then(function(responce) {
            return responce.data;
        })
    }
    this.addOne = function(game) {
        return $http.post(baseUrl, game).then(function(responce) {
            return responce.data;
        })
    }
}])