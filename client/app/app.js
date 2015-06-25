import 'normalize.css';
import './app.styl';
import angular from 'angular';

// we need to import
// other angular modules and
// register them him
import {NoteMaker} from './components/noteMaker/noteMaker';
import {NoteList} from './components/noteList/noteList';
// import common from './common/common';
import {NotesService} from './services/notesService';

angular.module('app', [
  NoteMaker.name,
  NoteList.name,
])
.directive('app', ()=> {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <div>
        <note-maker></note-maker>
        <note-list></note-list>
      </div>
    `
  }
})
.service('NotesService', NotesService);
