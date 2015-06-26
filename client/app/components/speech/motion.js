// the registration for our component
import angular from 'angular';
import {MotionComponent as component} from './motion.component';
import './motion.styl';

let MotionDetection = angular.module('motionDetection', [])
    .directive('motionDetection', component);

export {MotionDetection};
