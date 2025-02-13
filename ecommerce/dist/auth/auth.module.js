import * as angular from 'angular';
import { AuthController } from './controllers/auth.controller';
var authModule = angular.module('onlineShopping', []);
authModule.controller("AuthController", AuthController);
export { authModule };
