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

    cartItems: any = [];
    totalPrice: number = 0;

    constructor(private $scope: ICartScope, private shoppingcartService: any) {
        $scope['vm'] = this;
        this.cartItems = this.shoppingcartService.getCartItems();

        this.updateCart();
    }

    removeItem(productId: number): void {
        this.shoppingcartService.removeFromCart(productId);
        this.updateCart();
    }

    increaseQuantity(productId: number): void {
        const product = this.cartItems.find((item: any) => item.id === productId);
        if (product) {
            product.quantity += 1;
            product.price = product.unitPrice * product.quantity;
        }
        this.updateCart();
    }

    decreaseQuantity(productId: number): void {
        const product = this.cartItems.find((item: any) => item.id === productId);
        if (product && product.quantity > 1) {
            product.quantity -= 1;
            product.price = product.unitPrice * product.quantity;
        }
        this.updateCart();
    }

    private updateCart(): void {
        this.cartItems = this.shoppingcartService.getCartItems();
        this.totalPrice = this.cartItems.reduce((sum: any, item: any) => sum + item.price, 0);
    }
}

shoppingModule.controller('ShoppingcartController', ShoppingcartController);
