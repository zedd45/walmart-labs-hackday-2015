import angular from 'angular';
import {ProductComponent as component} from './product.component';
// import {ProductService} from './product.service';
import './product.styl';

let ProductListing = angular.module('productListing', [])
    .directive('productListing', component)
    // seemingly needs to be on the root app for DI to work as expected
    // .service('ProductService', ProductService);

export {ProductListing};
