(function () {
    var app = angular.module("onlineShopping", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })
            .when('/products', {
                templateUrl: 'views/products.html',
                controller: "ProductController"
            })
            .when('/shopingcard', {
                templateUrl: 'views/shopingcard.html',
                controller: 'ShopingCardController'
            })
            .otherwise({
                redirectTo: "/login"
            });
    });
}());
