'use strict';

class ProductsCtrl {
  constructor (ProductsService, CartService) {
    this.productsService = ProductsService;
    this.cartService = CartService;
    this.items = [];
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getProducts().then(results => {
      this.items = results.data.p;
    });
  }

  addToCart(item) {
    this.cartService.addItemToCart(item);
  }
}

ProductsCtrl.$inject = ['ProductsService', 'CartService'];

export default ProductsCtrl;
