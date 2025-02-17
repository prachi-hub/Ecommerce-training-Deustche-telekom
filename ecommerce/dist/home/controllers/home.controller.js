var HomeController = /** @class */ (function () {
    function HomeController($scope, $location, shoppingcartService, featureProductService, sharedCartCountService) {
        var _this = this;
        this.$scope = $scope;
        this.$location = $location;
        this.shoppingcartService = shoppingcartService;
        this.featureProductService = featureProductService;
        this.sharedCartCountService = sharedCartCountService;
        this.productName = '';
        this.featuredProducts = [];
        this.productIdCounter = 1;
        $scope['vm'] = this;
        this.featureProductService.getFeaturedProducts().then(function (response) {
            _this.featuredProducts = response.data;
        }).catch(function (error) {
            console.error('Error fetching featured products:', error);
        });
    }
    HomeController.prototype.addProductToShoppingCart = function (product) {
        this.shoppingcartService.addToCart(product);
        var updatedCartCount = this.shoppingcartService.getCartCount();
        this.sharedCartCountService.setCartCount(updatedCartCount);
        this.$location.path('/shoppingcart');
    };
    HomeController.$inject = ['$scope', '$location', 'shoppingcartService', 'featureProductService', 'sharedCartCountService'];
    return HomeController;
}());
angular.module('homeModule').controller('HomeController', HomeController);
