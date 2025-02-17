import * as angular from 'angular';

class SharedCartCountService {
    private cartCount: number = 0;

    getCartCount(): number {
        return this.cartCount;
    }

    setCartCount(count: number): void {
        this.cartCount = count;
    }
}

angular.module('homeModule').service('sharedCartCountService', SharedCartCountService);
