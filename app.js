var app = angular.module('maze', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/views/home.html"
    })
    .when("/about", {
        templateUrl: "app/views/about-us.html"
    })
    .when("/contact", {
        templateUrl: "green.htm"
    })
    .when("/seo-services", {
        templateUrl: "blue.htm"
    });
});