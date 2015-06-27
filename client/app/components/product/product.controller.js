class ProductsController {
  constructor (productsService) {
    this.productsService = productsService;
    this.items = [];
    this.fetchProducts();
  }

  fetchProducts () {
    this.productsService.getProducts()
      .success(results => {
        console.log('results: ', results);
        // like backbone's `parse`; for rendering,
        // we only care about a subset of the properties ATG sends back :)
        this.items = results.p;
      })
      .error( err => {
        console.error("unable to retrieve products: ", err);
      });

  }

  addToCart (item) {
    console.log('added to cart... should increment something...');
  }
}

ProductsController.$inject = ['ProductsService'];

export {ProductsController};
