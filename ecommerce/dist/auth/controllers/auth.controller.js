var AuthController = /** @class */ (function () {
    function AuthController($scope, $location) {
        this.$scope = $scope;
        this.$location = $location;
        this.user = {
            email: '',
            password: ''
        };
        $scope['vm'] = this;
    }
    AuthController.prototype.onValidate = function () {
        if (this.user.email === 'prachi.mankar@gmail.com' && this.user.password === '123456') {
            this.$location.path('/products');
        }
        else {
            alert('Please fill in all fields.');
        }
    };
    AuthController.$inject = ['$scope', '$location'];
    return AuthController;
}());
angular.module('authModule').controller('AuthController', AuthController);
