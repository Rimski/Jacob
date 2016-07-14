var app = angular.module("MainApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/login", {
        templateUrl: "./veiws/signin.html",
        controller: "authController"
    })
        .when("/signup", {
        templateUrl: "./veiws/signup.html",
        controller: "authController"
    })
//        .when("/", {
//        templateUrl: "",
//        controller: ""
//    })
//        .when("/", {
//        templateUrl: "",
//        controller: ""
//    })
//        .when("/", {
//        templateUrl: "",
//        controller: ""
//    })
        .otherwise({
        templateUrl: "./veiws/landing.html",
        controller: "authController"
    })
        
})