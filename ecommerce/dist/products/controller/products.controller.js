var ProductController = /** @class */ (function () {
    function ProductController($scope) {
        this.$scope = $scope;
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
    // Register Product
    ProductController.prototype.registerProduct = function () {
        var maxId = this.products.reduce(function (max, item) { return Math.max(max, item.id || 0); }, 0);
        this.products.push({
            id: maxId + 1,
            productName: this.productName,
            price: this.price,
            img: ''
        });
    };
    // Add Product to Shopping Cart
    ProductController.prototype.addProductToShoppingCart = function (productId) {
        alert("Product with ID ".concat(productId, " added to the shopping cart!"));
    };
    ProductController.$inject = ['$scope'];
    return ProductController;
}());
angular.module('productsModule').controller('ProductController', ProductController);
