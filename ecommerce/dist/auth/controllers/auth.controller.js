var AuthController = /** @class */ (function () {
    function AuthController($scope, $location, $http) {
        this.$scope = $scope;
        this.$location = $location;
        this.$http = $http;
        this.user = {
            email: '',
            password: ''
        };
        $scope['vm'] = this;
    }
    AuthController.prototype.onValidate = function () {
        var _this = this;
        this.$http.post('http://localhost:3000/login', this.user)
            .then(function (response) {
                if (response.status === 200) {
                    _this.$location.path('/home');
                }
            })
            .catch(function (error) {
                alert('Invalid credentials');
            });
    };
    AuthController.$inject = ['$scope', '$location', '$http'];
    return AuthController;
}());
angular.module('authModule').controller('AuthController', AuthController);
