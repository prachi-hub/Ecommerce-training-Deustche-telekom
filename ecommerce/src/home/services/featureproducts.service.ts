import * as angular from 'angular';

class FeatureProductService {
    static $inject = ['$http'];

    constructor(private $http: angular.IHttpService) { }

    getFeaturedProducts(): angular.IHttpPromise<any> {
        return this.$http.get('../../../featured-products.json');
    }
}

angular.module('homeModule').service('featureProductService', FeatureProductService);
