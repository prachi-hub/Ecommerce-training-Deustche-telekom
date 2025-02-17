var SignupController = /** @class */ (function () {
    function SignupController($scope, $location, $http) {
        this.$scope = $scope;
        this.$location = $location;
        this.$http = $http;
        this.user = {
            name: '',
            email: '',
            contact: '',
            password: '',
            confirmPassword: ''
        };
        this.passwordMismatch = false;
        $scope['vm'] = this;
    }
    SignupController.prototype.signup = function () {
        var _this = this;
        if (this.user.password !== this.user.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        this.$http.post('http://localhost:3000/signup', this.user)
            .then(function (response) {
                _this.$location.path('/home');
            })
            .catch(function (error) {
                console.error('Error:', error);
            });
    };
    SignupController.$inject = ['$scope', '$location', '$http'];
    return SignupController;
}());
angular.module('signupModule', []).controller('SignupController', SignupController);
