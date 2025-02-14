import * as angular from 'angular';
import { productsModule } from '../products.module';

interface IProductScope extends angular.IScope {
    vm: any;
}

class ProductController {
    static $inject = ['$scope'];

    productName: string = '';
    price: string | any;
    products = [
        { id: 1, img: "https://m.media-amazon.com/images/I/61GavzFRKVL._AC_UL480_FMwebp_QL65_.jpg", productName: 'Mobile', price: '25000' },
        { id: 2, img: "https://m.media-amazon.com/images/I/61OHplw85eL._AC_UY327_FMwebp_QL65_.jpg", productName: 'Headphones', price: '1000' },
        { id: 3, img: "https://m.media-amazon.com/images/I/61mxv1hiMUL._AC_UY327_FMwebp_QL65_.jpg", productName: 'Mobile stands', price: '300' }
    ];;
    productIdCounter: number = 1;

    constructor(private $scope: IProductScope) {
        $scope['vm'] = this;
    }

    // Register Product
    registerProduct(): void {
        const maxId = this.products.reduce((max, item) => Math.max(max, item.id || 0), 0);

        this.products.push({
            id: maxId + 1,
            productName: this.productName,
            price: this.price,
            img: ''
        });
    }

    addProductToShoppingCart(productId: number): void {
        alert(`Product with ID ${productId} added to the shopping cart!`);
    }
}

angular.module('productsModule').controller('ProductController', ProductController);
