// the registration for our component
import angular from 'angular';
import {noteMakerComponent} from './noteMaker.component';

let noteMaker = angular.module('', [])
    .directive('noteMaker', noteMakerComponent);

export {noteMaker};
