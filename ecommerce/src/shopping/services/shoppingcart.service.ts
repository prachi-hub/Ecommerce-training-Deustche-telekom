import * as angular from 'angular';
import { shoppingcartModule } from '../shopping.module';

interface IProduct {
    id: number;
    productName: string;
    price: number;
    img: string;
}

class ShoppingcartService {
    private cartItems: IProduct[] = [];

    addToCart(product: IProduct): void {
        this.cartItems.push(product);
    }

    getCartItems(): IProduct[] {
        return this.cartItems;
    }
}

shoppingcartModule.service('shoppingcartService', ShoppingcartService);
