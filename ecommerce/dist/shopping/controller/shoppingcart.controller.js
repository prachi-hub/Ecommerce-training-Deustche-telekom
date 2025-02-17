var ShoppingcartController = /** @class */ (function () {
    function ShoppingcartController($scope, shoppingcartService) {
        this.$scope = $scope;
        this.shoppingcartService = shoppingcartService;
        this.cartItems = [];
        this.totalPrice = 0;
        $scope['vm'] = this;
        this.cartItems = this.shoppingcartService.getCartItems();
        this.updateCart();
    }
    ShoppingcartController.prototype.updateCart = function () {
        this.cartItems = this.shoppingcartService.getCartItems();
        this.totalPrice = this.cartItems.reduce(function (sum, item) { return sum + item.price; }, 0);
    };
    ShoppingcartController.prototype.removeItem = function (productId) {
        this.shoppingcartService.removeFromCart(productId);
        this.updateCart();
    };
    ShoppingcartController.prototype.increaseQuantity = function (productId) {
        this.shoppingcartService.increaseQuantity(productId);
        this.updateCart();
    };
    ShoppingcartController.prototype.decreaseQuantity = function (productId) {
        this.shoppingcartService.decreaseQuantity(productId);
        this.updateCart();
    };
    ShoppingcartController.$inject = ['$scope', 'shoppingcartService', 'sharedCartCountService'];
    return ShoppingcartController;
}());
shoppingModule.controller('ShoppingcartController', ShoppingcartController);
