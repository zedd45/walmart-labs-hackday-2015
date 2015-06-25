// create our directive here
// import the template, controller, and style
import template from './note.html';

let NoteComponent = () => {
    return {
        restrict: 'E',
        transclude: true,
        template,
    };
};

export {NoteComponent};
