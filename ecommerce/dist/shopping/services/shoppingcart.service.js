var ShoppingcartService = /** @class */ (function () {
    function ShoppingcartService() {
        this.cartItems = [];
    }
    ShoppingcartService.prototype.addToCart = function (product) {
        this.cartItems.push(product);
    };
    ShoppingcartService.prototype.getCartItems = function () {
        return this.cartItems;
    };
    return ShoppingcartService;
}());
shoppingcartModule.service('shoppingcartService', ShoppingcartService);
