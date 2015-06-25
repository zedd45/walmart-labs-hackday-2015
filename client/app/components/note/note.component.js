// create our directive here
// import the template, controller, and style
import template from './note.html';

let NoteComponent = () => {
    return {
        restrict: 'E',
        transclude: true,
        template,
        // necessary as the extra DOM element causes a layout bug
        replace: true,
    };
};

export {NoteComponent};
