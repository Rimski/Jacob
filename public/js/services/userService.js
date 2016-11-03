var app = angular.module("MainApp");

app.service("userService", ["$http", function($http) {
    var baseUrl = "/api/users"
   this.getUsers = function() {
        return $http.get(baseUrl).then(function(responce) {
            return responce.data;
    })
   }
   this.deleteUser = function(user) {
       return $http.delete(baseUrl + user._id, function(responce){
           return responce.data;
       })
   }
}])