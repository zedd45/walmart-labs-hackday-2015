// the registration for our component
import angular from 'angular';
import {NoteListComponent as component} from './noteList.component';
import './noteList.styl';

let NoteList = angular.module('noteList', [])
    .directive('noteList', component);

export {NoteList};
