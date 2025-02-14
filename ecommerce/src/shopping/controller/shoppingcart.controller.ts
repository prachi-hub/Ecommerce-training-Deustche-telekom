import * as angular from 'angular';
import { shoppingcartModule } from '../shopping.module';

interface IProduct {
    id: number;
    productName: string;
    price: number;
    img: string;
}

interface ICartScope extends angular.IScope {
    vm: any;
}

class ShoppingcartController {
    static $inject = ['$scope', 'shoppingcartService'];

    cartItems: IProduct[] = [];

    constructor(private $scope: ICartScope, private shoppingcartService: any) {
        $scope['vm'] = this;
        this.cartItems = this.shoppingcartService.getCartItems();
    }
}

shoppingcartModule.controller('ShoppingcartController', ShoppingcartController);
