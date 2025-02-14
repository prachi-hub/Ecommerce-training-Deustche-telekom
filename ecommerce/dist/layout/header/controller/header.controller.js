var HeaderController = /** @class */ (function () {
    function HeaderController(CartService, $location) {
        this.CartService = CartService;
        this.$location = $location;
        this.cartCount = 0;
        this.isAuthenticated = false;
        this.updateCartCount();
    }
    HeaderController.prototype.updateCartCount = function () {
        this.cartCount = this.CartService.getCartItems().length;
    };
    HeaderController.prototype.goToCart = function () {
        this.$location.path('/cart');
    };
    HeaderController.prototype.login = function () {
        this.isAuthenticated = true;
        alert('Logged in successfully!');
    };
    HeaderController.prototype.logout = function () {
        this.isAuthenticated = false;
        alert('Logged out successfully!');
    };
    HeaderController.$inject = ['shoppingcartService', '$location'];
    return HeaderController;
}());
shoppingcartModule.component('appHeader', {
    templateUrl: 'views/header.html',
    controller: HeaderController,
    controllerAs: 'headerCtrl'
});
