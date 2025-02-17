var shoppingModule = angular.module('shoppingModule', [headerModule.name]);
shoppingModule.component('appHeader', {
    templateUrl: 'views/header.html',
    controller: 'HeaderController',
    controllerAs: 'headerCtrl'
});
