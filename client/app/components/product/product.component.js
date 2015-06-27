import template from './product.html';
import {ProductsController as controller} from './product.controller';

let ProductComponent = () => {
    return {
        restrict: 'E',
        template,
        replace: true,
        controller,
        controllerAs: 'pc',
    };
};

export {ProductComponent};
