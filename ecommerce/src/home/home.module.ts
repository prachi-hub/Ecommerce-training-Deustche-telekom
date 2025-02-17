import * as angular from 'angular';

import { shoppingModule } from '../shopping/shopping.module';

export const homeModule = angular.module('homeModule', ['shoppingModule']);