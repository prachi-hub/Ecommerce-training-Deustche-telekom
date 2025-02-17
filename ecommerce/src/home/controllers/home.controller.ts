import * as angular from 'angular';

interface IHomeScope extends angular.IScope {
    vm: any;
}

class HomeController {
    static $inject = ['$scope', '$location', 'shoppingcartService', 'featureProductService', 'sharedCartCountService'];

    productName: string = '';
    price: string | any;
    featuredProducts = [];
    productIdCounter: number = 1;

    constructor(private $scope: IHomeScope, private $location: angular.ILocationService, private shoppingcartService: any,
        private featureProductService: any, private sharedCartCountService: any
    ) {
        $scope['vm'] = this;

        this.featureProductService.getFeaturedProducts().then((response: any) => {
            this.featuredProducts = response.data;
        }).catch((error: any) => {
            console.error('Error fetching featured products:', error);
        });
    }

    addProductToShoppingCart(product: any): void {
        this.shoppingcartService.addToCart(product);

        const updatedCartCount = this.shoppingcartService.getCartCount();
        this.sharedCartCountService.setCartCount(updatedCartCount);

        this.$location.path('/shoppingcart');
    }
}

angular.module('homeModule').controller('HomeController', HomeController);
