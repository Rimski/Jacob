var app = angular.module("MainApp");
app.controller("navController", ["$scope", "tokenService", function($scope, tokenService) {
   $scope.token = tokenService.getToken();
    $scope.logOut = function () {
        tokenService.removeToken();
        $scope.token = false;
    }
}])