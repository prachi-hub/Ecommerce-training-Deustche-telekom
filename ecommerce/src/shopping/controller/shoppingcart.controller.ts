import * as angular from 'angular';
import { shoppingModule } from '../shopping.module';

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
    static $inject = ['$scope', 'shoppingcartService', 'sharedCartCountService'];

    cartItems: IProduct[] = [];
    totalPrice: number = 0;

    constructor(private $scope: ICartScope, private shoppingcartService: any) {
        $scope['vm'] = this;
        this.cartItems = this.shoppingcartService.getCartItems();

        this.updateCart();
    }

    private updateCart(): void {
        this.cartItems = this.shoppingcartService.getCartItems();
        this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price, 0);
    }

    removeItem(productId: number): void {
        this.shoppingcartService.removeFromCart(productId);
        this.updateCart();
    }

    increaseQuantity(productId: number): void {
        this.shoppingcartService.increaseQuantity(productId);
        this.updateCart();
    }

    decreaseQuantity(productId: number): void {
        this.shoppingcartService.decreaseQuantity(productId);
        this.updateCart();
    }
}

shoppingModule.controller('ShoppingcartController', ShoppingcartController);
