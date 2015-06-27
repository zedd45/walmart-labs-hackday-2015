import template from './speech.html';
import {SpeechController as controller} from './speech.controller';

let SpeechComponent = () => {
    return {
        restrict: 'E',
        template,
        // replace: true,
        controller,
        controllerAs: 'speech',
    };
};

export {SpeechComponent};
