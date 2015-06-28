class ProductsController {
  constructor (productsService, $rootScope) {
    let update = this.updateProducts.bind(this);
    this.productsService = productsService;
    $rootScope.$on('products:updated', update);
  }

  updateProducts (e, data) {
    this.products = data;
  }

  fetchProducts () {
    this.productsService.getProducts();
  }
}

ProductsController.$inject = ['ProductsService', '$rootScope'];

export {ProductsController};
