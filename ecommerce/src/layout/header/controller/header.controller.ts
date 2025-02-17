import * as angular from 'angular';

class HeaderController {
    static $inject = ['$scope', 'shoppingcartService', '$location', 'sharedCartCountService'];

    cartCount: number = 0;
    isAuthenticated: boolean = false;

    constructor(private $scope: angular.IScope, private shoppingcartService: any, private $location: angular.ILocationService,
        private sharedCartCountService: any
    ) {
        this.cartCount = this.sharedCartCountService.getCartCount();

        this.$scope.$watch(() => this.sharedCartCountService.getCartCount(), (count: number) => {
            this.cartCount = count;
        });

    }

    login(): void {
        this.isAuthenticated = true;
    }

    logout(): void {
        this.isAuthenticated = false;
    }
}

angular.module('headerModule').controller('HeaderController', HeaderController);
