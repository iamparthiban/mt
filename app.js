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
        templateUrl: "app/views/contact-us.html"
    })
    .when("/seo-services", {
        templateUrl: "blue.htm"
    });
});