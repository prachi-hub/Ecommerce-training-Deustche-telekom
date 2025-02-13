import * as angular from 'angular';

import { AuthController } from '../src/auth/controllers/auth.controller';

const app = angular.module('onlineShopping', []);
app.controller("AuthController", AuthController);