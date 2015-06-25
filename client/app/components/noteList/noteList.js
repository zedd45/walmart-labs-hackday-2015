// the registration for our component
import angular from 'angular';
import {NoteListComponent as component} from './noteList.component';
import {Note} from '../note/note';
import './noteList.styl';

let NoteList = angular.module('noteList', [Note.name])
    .directive('noteList', component);

export {NoteList};
