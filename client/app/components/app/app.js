import './app.styl';
import template from './app.html';

let App = () => {
  return {
    restrict: 'E',
    replace: true,
    template,
  }
}

export {App};
