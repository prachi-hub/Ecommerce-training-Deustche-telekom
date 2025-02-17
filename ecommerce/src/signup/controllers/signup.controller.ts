import * as angular from 'angular';

interface IAuthScope extends angular.IScope {
    vm: any;
}

class SignupController {
    static $inject = ['$scope', '$location', '$http'];

    user: { name: string; email: string; contact: string; password: string; confirmPassword: string } = {
        name: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: ''
    };

    passwordMismatch: boolean = false;

    constructor(private $scope: IAuthScope, private $location: angular.ILocationService, private $http: angular.IHttpService) {
        $scope['vm'] = this;
    }

    signup(): void {
        if (this.user.password !== this.user.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        this.$http.post('http://localhost:3000/signup', this.user)
            .then((response) => {
                this.$location.path('/home');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

angular.module('signupModule', []).controller('SignupController', SignupController);
