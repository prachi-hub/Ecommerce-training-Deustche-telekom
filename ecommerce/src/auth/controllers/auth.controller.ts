import * as angular from 'angular';

interface ICustomScope extends angular.IScope {
    vm: any;
}

export class AuthController {
    static $inject = ['$scope'];

    constructor(private $scope: ICustomScope) {

        $scope['vm'] = this;
    }
}