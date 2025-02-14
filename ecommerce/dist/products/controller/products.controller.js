var ProductController = /** @class */ (function () {
    function ProductController($scope, $location, shoppingcartService) {
        this.$scope = $scope;
        this.$location = $location;
        this.shoppingcartService = shoppingcartService;
        this.productName = '';
        this.products = [
            { id: 1, img: "https://m.media-amazon.com/images/I/61GavzFRKVL._AC_UL480_FMwebp_QL65_.jpg", productName: 'Mobile', price: '25000' },
            { id: 2, img: "https://m.media-amazon.com/images/I/61OHplw85eL._AC_UY327_FMwebp_QL65_.jpg", productName: 'Headphones', price: '1000' },
            { id: 3, img: "https://m.media-amazon.com/images/I/61mxv1hiMUL._AC_UY327_FMwebp_QL65_.jpg", productName: 'Mobile stands', price: '300' }
        ];
        this.productIdCounter = 1;
        $scope['vm'] = this;
    }
    ;
    ProductController.prototype.registerProduct = function () {
        var maxId = this.products.reduce(function (max, item) { return Math.max(max, item.id || 0); }, 0);
        this.products.push({
            id: maxId + 1,
            productName: this.productName,
            price: this.price,
            img: ''
        });
    };
    ProductController.prototype.addProductToShoppingCart = function (product) {
        console.log("add product", product);
        this.shoppingcartService.addToCart(product);
        this.$location.path('/shoppingcart');
    };
    ProductController.$inject = ['$scope', '$location', 'shoppingcartService'];
    return ProductController;
}());
angular.module('productsModule').controller('ProductController', ProductController);
