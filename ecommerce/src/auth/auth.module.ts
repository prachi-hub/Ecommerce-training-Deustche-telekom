import * as angular from 'angular';

import { AuthController } from './controllers/auth.controller';

const authModule = angular.module('onlineShopping', []);
authModule.controller("AuthController", AuthController);

export { authModule };