// the registration for our component
import angular from 'angular';
import {ClubComponent as component} from './club.component';
import './club.styl';

let ClubListing = angular.module('clubListing', [])
    .directive('clubListing', component);

export {ClubListing};
