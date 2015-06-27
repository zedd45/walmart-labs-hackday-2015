import template from './product.html';

let ProductList = () => {
    return {
        restrict: 'E',
        template,
        replace: true,
    };
};

export {ProductList};
