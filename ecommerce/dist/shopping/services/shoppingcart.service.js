var ShoppingcartService = /** @class */ (function () {
    function ShoppingcartService(sharedCartCountService) {
        this.sharedCartCountService = sharedCartCountService;
        this.cartItems = [];
    }
    ShoppingcartService.prototype.addToCart = function (product) {
        var existingProduct = this.cartItems.find(function (item) { return item.id === product.id; });
        if (existingProduct) {
            existingProduct.quantity += 1; // If product exists, increase quantity
        }
        else {
            product.quantity = 1; // If product doesn't exist, add it with quantity 1
            this.cartItems.push(product);
        }
    };
    ShoppingcartService.prototype.getCartItems = function () {
        return this.cartItems;
    };
    ShoppingcartService.prototype.getCartCount = function () {
        return this.cartItems.length;
    };
    ShoppingcartService.prototype.removeFromCart = function (productId) {
        this.cartItems = this.cartItems.filter(function (item) { return item.id !== productId; });
        this.sharedCartCountService.setCartCount(this.cartItems.length);
    };
    ShoppingcartService.prototype.increaseQuantity = function (productId) {
        var product = this.cartItems.find(function (item) { return item.id === productId; });
        if (product) {
            product.price += product.price;
        }
    };
    ShoppingcartService.prototype.decreaseQuantity = function (productId) {
        var product = this.cartItems.find(function (item) { return item.id === productId; });
        if (product && product.price > product.price) {
            product.price -= product.price;
        }
    };
    ShoppingcartService.$inject = ['sharedCartCountService'];
    return ShoppingcartService;
}());
shoppingModule.service('shoppingcartService', ShoppingcartService);
