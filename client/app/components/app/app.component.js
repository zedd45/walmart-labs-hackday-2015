import './app.styl';
import template from './app.html';
import {AppController as controller} from './app.controller';

let AppComponent = () => {
  return {
    restrict: 'E',
    replace: true,
    template,
    // controller,
    // controllerAs: 'ac',
  }
}

export {AppComponent};
