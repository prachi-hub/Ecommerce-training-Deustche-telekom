var AuthController = /** @class */ (function () {
    function AuthController($scope) {
        this.$scope = $scope;
        $scope['vm'] = this;
    }
    AuthController.$inject = ['$scope'];
    return AuthController;
}());