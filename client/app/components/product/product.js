import angular from 'angular';
import {ProductComponent as component} from './product.component';
import './product.styl';

let Product = angular.module('product', [])
    .directive('product', component);

export {Product};
