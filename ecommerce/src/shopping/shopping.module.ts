import * as angular from 'angular';
import { headerModule } from '../layout/header/header.module';

export const shoppingModule = angular.module('shoppingModule', [headerModule.name]);

shoppingModule.component('appHeader', {
    templateUrl: 'views/header.html',
    controller: 'HeaderController',
    controllerAs: 'headerCtrl'
});
