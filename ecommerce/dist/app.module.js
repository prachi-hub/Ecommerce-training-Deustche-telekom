angular.module('onlineShopping', ['ngRoute', 'authModule', 'productsModule', 'shoppingcartModule'])
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
            .when('/shoppingcart', {
                templateUrl: 'views/shoppingcart.html',
                controller: 'ShoppingcartController',
                controllerAs: 'shoppingcartCtrl'
            })
            .otherwise({
                redirectTo: '/auth'
            });
    }]);
