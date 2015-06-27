import template from './club.html';
import {ClubController as controller} from './club.controller';

let ClubComponent = () => {
    return {
        restrict: 'E',
        template,
        replace: true,
        controller,
        controllerAs: 'club',
    };
};

export {ClubComponent};
