class ProductController {
  constructor (ProductsService) {
    this.productsService = ProductsService;
    this.items = [];
    this.fetchProducts();
  }

  fetchProducts () {
    this.productsService.getProducts().then(results => {
      console.log('results: ', results);
      this.items = results.data.p;
    });
  }

  addToCart (item) {
    console.log('added to cart');
  }
}

ProductController.$inject = ['ProductService'];

export {ProductController};
