'use strict';

class ProductsService {
  constructor($http) {
    this.$http = $http;
  }

  getProducts() {
    const url = 'app/products/products.json';

    let config = {
      params: {
        loadType: 'full',
        repositoryId: '2080109',
        filter: 'all',
        pageNum: 1,
        pageSize: 10,
        sortBy: 4,
        sortDirection: 1,
        class: 'category',
        cnpApp: false
      }
    };

    return this.$http.get(url, config);
  }
}

ProductsService.$inject = ['$http'];

export default ProductsService;
