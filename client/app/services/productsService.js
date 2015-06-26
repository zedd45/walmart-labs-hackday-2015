class ProductsService {
  constructor($http) {
    this.$http = $http;
  }

  getProducts () {
    const url = 'app/services/products.json';
    return this.$http.get(url);
  }

}

ProductsService.$inject = ['$http'];

export {ProductsService};
