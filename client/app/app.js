import 'normalize.css';
import './app.styl';
import angular from 'angular';

import {App} from './components/app/app';
import {SpeechRecognition} from './components/speech/speech';
import {ProductsService} from './services/productsService';

angular.module('app', [
    MotionDetection.name
])
.directive('app', App)
.service('ProductsService', ProductsService);
