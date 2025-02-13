"use strict";
(function () {
    angular.module("onlineShopping")
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider
                .when('/login', {
                templateUrl: 'views/auth.html',
                controller: 'AuthController'
            })
                .when('/products', {
                templateUrl: 'views/products.html',
                controller: 'ProductController'
            })
                .when('/shopingcard', {
                templateUrl: 'views/shopingcard.html',
                controller: 'ShopingCardController'
            })
                .otherwise({
                redirectTo: "/login"
            });
        }]);
}());
