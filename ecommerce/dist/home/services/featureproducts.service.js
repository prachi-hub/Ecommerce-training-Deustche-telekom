var FeatureProductService = /** @class */ (function () {
    function FeatureProductService($http) {
        this.$http = $http;
    }
    FeatureProductService.prototype.getFeaturedProducts = function () {
        return this.$http.get('../../../featured-products.json');
    };
    FeatureProductService.$inject = ['$http'];
    return FeatureProductService;
}());
angular.module('homeModule').service('featureProductService', FeatureProductService);
