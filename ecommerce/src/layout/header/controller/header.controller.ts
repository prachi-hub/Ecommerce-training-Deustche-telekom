import * as angular from 'angular';

import { shoppingcartModule } from '../../../shopping/shopping.module';

class HeaderController {
    static $inject = ['shoppingcartService', '$location'];

    cartCount: number = 0;
    isAuthenticated: boolean = false;

    constructor(private CartService: any, private $location: angular.ILocationService) {
        this.updateCartCount();
    }

    updateCartCount(): void {
        this.cartCount = this.CartService.getCartItems().length;
    }

    goToCart(): void {
        this.$location.path('/cart');
    }

    login(): void {
        this.isAuthenticated = true;
        alert('Logged in successfully!');
    }

    logout(): void {
        this.isAuthenticated = false;
        alert('Logged out successfully!');
    }
}

shoppingcartModule.component('appHeader', {
    templateUrl: 'views/header.html',
    controller: HeaderController,
    controllerAs: 'headerCtrl'
});
