import 'normalize.css';
import './app.styl';
import angular from 'angular';

// we need to import
// other angular modules and
// register them him
import {noteMaker} from './components/noteMaker/noteMaker';
import common from './common/common';
import {NotesService} from './services/notesService';

angular.module('app', [
  noteMaker.name,
])
.directive('app', ()=> {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <div>
        <note-maker></note-maker>
      </div>
    `
  }
})
.service('NotesService', NotesService);
