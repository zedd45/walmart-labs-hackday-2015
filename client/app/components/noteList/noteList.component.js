// create our directive here
// import the template, controller, and style
import template from './noteList.html';
import {NoteListController as controller} from './noteList.controller';

console.log("controller", controller);

let NoteListComponent = () => {
    return {
        restrict: 'E',
        template,
        controller,
        controllerAs: 'vm',
        // replace: true,
        // isolate scope so conflicting controllerAs properties
        // don't cause issues with events not firing
        scope: {},
    };
};

export {NoteListComponent};
