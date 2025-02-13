app.service('ProductService', function () {
    var productLists = [];

    this.setProductLists = function (prooductList) {
        productLists = prooductList;
    };

    this.getProductLists = function () {
        return productLists;
    };
});
