import * as angular from 'angular';
import 'angular-route';

import { shoppingModule } from './shopping/shopping.module';
import { headerModule } from './layout/header/header.module';

var app = angular.module('onlineShopping', ['ngRoute', 'headerModule', 'authModule', 'signupModule', 'homeModule', 'shoppingModule']);

app.config(['$routeProvider', function ($routeProvider: any) {
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

export default app;