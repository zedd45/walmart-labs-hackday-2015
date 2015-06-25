// the registration for our component
import angular from 'angular';
import {notePanelComponent as component} from './notePanel.component';
import './notePanel.styl';

let notesPanel = angular.module('notesPanel', [])
    .directive('notesPanel', component);

export {notesPanel};
