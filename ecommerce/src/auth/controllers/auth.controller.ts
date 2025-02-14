import * as angular from 'angular';

interface IAuthScope extends angular.IScope {
    vm: any;
}

class AuthController {
    static $inject = ['$scope', '$location'];

    user = {
        email: '',
        password: ''
    };

    constructor(private $scope: IAuthScope, private $location: angular.ILocationService) {
        $scope['vm'] = this;
    }

    onValidate(): void {
        if (this.user.email === 'prachi.mankar@gmail.com' && this.user.password === '123456') {
            this.$location.path('/products');
        } else {
            alert('Please fill in all fields.');
        }
    }
}

angular.module('authModule').controller('AuthController', AuthController);