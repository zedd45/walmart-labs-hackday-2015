// the registration for our component
import angular from 'angular';
import {SpeechComponent as component} from './speech.component';
import './speech.styl';

let SpeechRecognition = angular.module('speechRecognition', [])
    .directive('speechRecognition', component);

export {SpeechRecognition};
