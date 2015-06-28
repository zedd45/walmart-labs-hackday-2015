import 'normalize.css';
import './app.styl';
import angular from 'angular';

// components
import {App} from './components/app/app';
import {SpeechRecognition} from './components/speech/speech';
import {ProductListing} from './components/product/product';
import {ClubListing} from './components/club/club';

// services
import {ClubLocatorService} from './services/clubLocatorService';
import {ProductsService} from './services/product.service';

angular.module('app', [
    SpeechRecognition.name,
    ProductListing.name,
    ClubListing.name,
])
.directive('app', App)
.service('ProductsService', ProductsService)
.service('ClubLocatorService', ClubLocatorService);
