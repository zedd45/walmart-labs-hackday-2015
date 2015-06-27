import angular from 'angular';
import {ProductComponent as component} from './product.component';
import './product.styl';

let ProductListing = angular.module('productListing', [])
    .directive('productListing', component);

export {ProductListing};
