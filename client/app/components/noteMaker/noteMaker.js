// the registration for our component
import angular from 'angular';
import {noteMakerComponent} from './noteMaker.component';
import './noteMaker.styl';

let noteMaker = angular.module('noteMaker', [])
    .directive('noteMaker', noteMakerComponent);

export {noteMaker};
