import * as angular from 'angular';
import 'angular-route';

angular.module('onlineShopping', ['ngRoute', 'authModule', 'productsModule'])
    .config(['$routeProvider', function ($routeProvider: any) {
        $routeProvider
            .when('/auth', {
                templateUrl: 'views/auth.html',
                controller: 'AuthController',
                controllerAs: 'authCtrl'
            })
            .when('/products', {
                templateUrl: 'views/products.html',
                controller: 'ProductController',
                controllerAs: 'productCtrl'
            })
            .otherwise({
                redirectTo: '/auth'
            });
    }]);
