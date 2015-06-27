class ProductsService {
  constructor($http) {
    this.$http = $http;
  }

  getProducts () {
    // TODO: replace with product service from mWeb
    const url = 'app/components/product/products.json';
    return this.$http.get(url);
  }
}

ProductsService.$inject = ['$http'];

export {ProductsService};
