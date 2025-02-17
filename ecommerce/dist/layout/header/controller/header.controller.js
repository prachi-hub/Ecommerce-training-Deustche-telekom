var HeaderController = /** @class */ (function () {
    function HeaderController($scope, shoppingcartService, $location, sharedCartCountService) {
        var _this = this;
        this.$scope = $scope;
        this.shoppingcartService = shoppingcartService;
        this.$location = $location;
        this.sharedCartCountService = sharedCartCountService;
        this.cartCount = 0;
        this.isAuthenticated = false;
        this.cartCount = this.sharedCartCountService.getCartCount();
        this.$scope.$watch(function () { return _this.sharedCartCountService.getCartCount(); }, function (count) {
            _this.cartCount = count;
        });
    }
    HeaderController.prototype.login = function () {
        this.isAuthenticated = true;
    };
    HeaderController.prototype.logout = function () {
        this.isAuthenticated = false;
    };
    HeaderController.$inject = ['$scope', 'shoppingcartService', '$location', 'sharedCartCountService'];
    return HeaderController;
}());
angular.module('headerModule').controller('HeaderController', HeaderController);
