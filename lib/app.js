/// <reference path="js/angular/angular.js" />
/// <reference path="js/angular/angular-sanitize.js" />
/// <reference path="js/angular/angular-route.js" />
var mainModule = angular.module("appMain", ["ngRoute", "ngSanitize", "ngAnimate"]).config(function ($routeProvider) {
    $routeProvider.when("/", { templateUrl: "views/main.html" })
        .when("/main", { templateUrl: "views/main.html" })
        .when("/newsList/:id", { templateUrl: "views/news/newsList.html" })
        .when('/newsDetail/:catetogyId/:newsId', { templateUrl: 'views/news/newsDetail.html' })
        .when("/jobsList/:id", { templateUrl: "views/jobs/jobs.html" })
        .when("/productList", { templateUrl: "views/products/productList.html" })
        .when("/productDetail/:id", { templateUrl: "views/products/productDetail.html" })
        .otherwise({ rediectTo: "/" });
});