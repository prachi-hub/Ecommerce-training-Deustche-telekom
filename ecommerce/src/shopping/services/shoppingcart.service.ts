import * as angular from 'angular';
import { shoppingModule } from '../shopping.module';

class ShoppingcartService {
    static $inject = ['sharedCartCountService'];
    private cartItems: any = [];

    constructor(private sharedCartCountService: any) { }

    addToCart(product: any): void {
        const existingProduct = this.cartItems.find((item: any) => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            product.quantity = 1;
            this.cartItems.push(product);
        }
    }

    getCartItems(): any[] {
        return this.cartItems;
    }

    getCartCount(): number {
        return this.cartItems.length;
    }

    removeFromCart(productId: number): void {
        this.cartItems = this.cartItems.filter((item: any) => item.id !== productId);
        this.sharedCartCountService.setCartCount(this.cartItems.length);
    }
}

shoppingModule.service('shoppingcartService', ShoppingcartService);
