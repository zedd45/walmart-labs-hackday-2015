// the registration for our component
import angular from 'angular';
import {NoteComponent as component} from './note.component';
import './note.styl';

let Note = angular.module('note', [])
    .directive('note', component);

export {Note};
