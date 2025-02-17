import * as angular from 'angular';

interface IAuthScope extends angular.IScope {
    vm: any;
}

class AuthController {
    static $inject = ['$scope', '$location', '$http'];

    user = {
        email: '',
        password: ''
    };

    constructor(private $scope: IAuthScope, private $location: angular.ILocationService, private $http: angular.IHttpService) {
        $scope['vm'] = this;
    }

    onValidate(): void {
        this.$http.post('http://localhost:3000/login', this.user)
            .then((response) => {
                if (response.status === 200) {
                    this.$location.path('/home');
                }
            })
            .catch((error) => {
                alert('Invalid credentials');
            });
    }
}

angular.module('authModule').controller('AuthController', AuthController);