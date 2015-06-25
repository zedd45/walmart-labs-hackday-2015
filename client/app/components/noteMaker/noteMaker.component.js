// create our directive here
// import the template, controller, and style
import template from './noteMaker.html';
import {NoteMakerController as controller} from './noteMaker.controller';

let NoteMakerComponent = () => {
    return {
        restrict: 'E',
        template,
        controller,
        controllerAs: 'vm',
        // isolate scope so conflicting controllerAs properties
        // don't cause issues with events not firing
        scope: {},
    };
};

export {NoteMakerComponent};
