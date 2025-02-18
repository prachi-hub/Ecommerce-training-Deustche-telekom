var ShoppingcartController = /** @class */ (function () {
    function ShoppingcartController($scope, shoppingcartService) {
        this.$scope = $scope;
        this.shoppingcartService = shoppingcartService;
        this.cartItems = [];
        this.totalPrice = 0;
        this.numberOfProductPrice = 0;
        $scope['vm'] = this;
        this.cartItems = this.shoppingcartService.getCartItems();
        this.updateCart();
    }
    // private updateCart(): void {
    //     this.cartItems = this.shoppingcartService.getCartItems();
    //     this.totalPrice = this.cartItems.reduce((sum: any, item: any) => sum + (item.price * item.quantity), 0);
    // }
    ShoppingcartController.prototype.removeItem = function (productId) {
        this.shoppingcartService.removeFromCart(productId);
        this.updateCart();
    };
    ShoppingcartController.prototype.increaseQuantity = function (productId) {
        var product = this.cartItems.find(function (item) { return item.id === productId; });
        if (product) {
            product.quantity += 1;
            product.price = product.unitPrice * product.quantity;
        }
        this.updateCart();
    };
    ShoppingcartController.prototype.decreaseQuantity = function (productId) {
        var product = this.cartItems.find(function (item) { return item.id === productId; });
        if (product && product.quantity > 1) {
            product.quantity -= 1;
            product.price = product.unitPrice * product.quantity;
        }
        this.updateCart();
    };
    ShoppingcartController.prototype.updateCart = function () {
        this.cartItems = this.shoppingcartService.getCartItems();
        this.totalPrice = this.cartItems.reduce(function (sum, item) { return sum + item.price; }, 0);
    };
    ShoppingcartController.$inject = ['$scope', 'shoppingcartService', 'sharedCartCountService'];
    return ShoppingcartController;
}());
shoppingModule.controller('ShoppingcartController', ShoppingcartController);
