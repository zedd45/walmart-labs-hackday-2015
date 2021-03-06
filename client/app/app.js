import angular from 'angular';

// components
import {AppComponent} from './components/app/app.component';
import {SpeechRecognition} from './components/speech/speech';
import {ProductListing} from './components/product/product';
import {ClubListing} from './components/club/club';

// services
import {ClubLocatorService} from './services/clubLocatorService';
import {ProductsService} from './services/product.service';

$.material.init();

angular.module('app', [
    SpeechRecognition.name,
    ProductListing.name,
    ClubListing.name,
])
.directive('app', AppComponent)
.service('ProductsService', ProductsService)
.service('ClubLocatorService', ClubLocatorService);
