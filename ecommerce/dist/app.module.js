var app = angular.module('onlineShopping', ['ngRoute', 'headerModule', 'authModule', 'signupModule', 'homeModule', 'shoppingModule']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/auth', {
            templateUrl: 'views/auth.html',
            controller: 'AuthController',
            controllerAs: 'authCtrl'
        })
        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'SignupController',
            controllerAs: 'signupCtrl'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        })
        .when('/shoppingcart', {
            templateUrl: 'views/shoppingcart.html',
            controller: 'ShoppingcartController',
            controllerAs: 'shoppingcartCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
