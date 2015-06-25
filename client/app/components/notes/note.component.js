// create our directive here
// import the template, controller, and style
import template from './notesPanel.html';

let notesPanelComponent = () => {
    return {
        restrict: 'E',
        template,
    };
};

export {notesPanelComponent};
