import 'normalize.css';
import './app.styl';
import angular from 'angular';

import {App} from './components/app/app';
import {SpeechRecognition} from './components/speech/speech';
import {ProductsService} from './services/productsService';
import {ClubLocatorService} from './services/clubLocatorService';

angular.module('app', [
    SpeechRecognition.name
])
.directive('app', App)
.service('ProductsService', ProductsService)
.service('ClubLocatorService', ClubLocatorService);
