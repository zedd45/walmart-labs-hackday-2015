class ProductsController {
  constructor (productsService) {
    const products = [];
    this.products = products;

    this.productsService = productsService;
  }

  fetchProducts () {
    this.productsService.getProducts()
      .success(results => {
        if (__DEV__) {
          console.log('results: ', results);
        }
        // like backbone's `parse`; for rendering,
        // we only care about a subset of the properties ATG sends back :)
        this.products = results.p;
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
