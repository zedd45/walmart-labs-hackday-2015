'use strict';

class miniCart {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = 'app/components/minicart/minicart.html';
    this.replace = true;
    this.controllerAs = 'vm';
    this.bindToController = true;

    this.scope = {};
  }

  /* @ngInject */
  controller(CartService) {
    this.cartService = CartService;

    this.cartLength = () => {
      return this.cartService.getCartLength();
    };
  }

  static render() {
    return new miniCart();
  }
}

miniCart.$inject = ['CartService'];

export default miniCart;
