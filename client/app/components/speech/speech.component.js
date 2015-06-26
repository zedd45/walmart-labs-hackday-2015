import template from './motion.html';

let MotionComponent = () => {
    return {
        restrict: 'E',
        template,
        replace: true,
        link: function (scope, element, attrs) {
            debugger;
        },
    };
};

export {MotionComponent};
