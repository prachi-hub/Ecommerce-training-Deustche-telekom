angular.module('onlineShopping', ['ngRoute', 'authModule', 'productsModule'])
    .config(['$routeProvider', function ($routeProvider) {
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
