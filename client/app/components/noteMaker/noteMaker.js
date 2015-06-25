// the registration for our component
import angular from 'angular';
import {NoteMakerComponent as component} from './noteMaker.component';
import './noteMaker.styl';

let NoteMaker = angular.module('noteMaker', [])
    .directive('noteMaker', component);

export {NoteMaker};
