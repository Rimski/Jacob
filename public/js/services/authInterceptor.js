var app = angular.module("MainApp");
app.factory("AuthInterceptor", ["$location", "$q", function ($location, $q) {
    return {
        request: function (config) {
            var token = localStorage.getItem("token");
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = "Bearer " + token;
            }
            return config;
        },
        responseError: function (response) {
            if (response.status === 401) {
                localStorage.removeItem("token");
                $location.path("/landing");
            }
            return $q.reject(response);
        }
    }
}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);
