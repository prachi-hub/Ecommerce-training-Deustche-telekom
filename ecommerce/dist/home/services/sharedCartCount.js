var SharedCartCountService = /** @class */ (function () {
    function SharedCartCountService() {
        this.cartCount = 0;
    }
    SharedCartCountService.prototype.getCartCount = function () {
        return this.cartCount;
    };
    SharedCartCountService.prototype.setCartCount = function (count) {
        this.cartCount = count;
    };
    return SharedCartCountService;
}());
angular.module('homeModule').service('sharedCartCountService', SharedCartCountService);
