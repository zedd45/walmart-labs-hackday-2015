'use strict';

class CartService {
  constructor() {
    this.cartItems = [];
  }

  getLineItems() {
    return this.cartItems;
  }

  addItemToCart(item) {
    this.cartItems.push(item);
  }

  removeItemFromCart(item) {
    // let _itemIndex = this.cartItems.indexOf(item);
    let _itemIndex = this.cartItems.findIndex(ci => ci.id === item.id);

    if (_itemIndex >= 0) {
      this.cartItems.splice(_itemIndex, 1);
    }
  }

  getCartLength() {
    return this.cartItems.length;
  }
}

export default CartService;
