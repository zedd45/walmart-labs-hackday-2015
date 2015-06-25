import template from './noteMaker.html';

let noteMakerComponent = () => {
    return {
        restrict: 'E',
        template: template,
    };
};

export {noteMakerComponent};
