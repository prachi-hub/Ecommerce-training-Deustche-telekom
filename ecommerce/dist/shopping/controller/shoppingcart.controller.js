var ShoppingcartController = /** @class */ (function () {
    function ShoppingcartController($scope, shoppingcartService) {
        this.$scope = $scope;
        this.shoppingcartService = shoppingcartService;
        this.cartItems = [];
        $scope['vm'] = this;
        this.cartItems = this.shoppingcartService.getCartItems();
    }
    ShoppingcartController.$inject = ['$scope', 'shoppingcartService'];
    return ShoppingcartController;
}());
shoppingcartModule.controller('ShoppingcartController', ShoppingcartController);
