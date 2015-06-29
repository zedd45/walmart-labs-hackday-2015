/**
 * shared service for obtaining product information
 *
 * Broadcasts 'products:updated' to $rootScope (probably a better way)
 *
 */
class ProductsService {

  constructor($http, $rootScope) {
    this.$http = $http;
    this.$rootScope = $rootScope;
    this.products = [];
  }

  notifyObservers () {
    this.$rootScope.$broadcast('products:updated', this.products);
  }

  getProducts (searchString) {
    // const url = `http://m.samsclub.com/api/sams/samsapi/v1/searchService?loadType=full&sortBy=2&pageSize=10&class=category&sortDirection=1&cnpApp=false&filter=all&pageNum=1&txt=${searchString}`;
    // const url = `http://mobility.samsclub.com/samsapi/v1/searchService?loadType=full&sortBy=2&pageSize=10&class=category&sortDirection=1&cnpApp=false&filter=all&pageNum=1&txt=${searchString}`;

    const mapping = {
      drinks: ["gatoraid", "gatorade"]
    };

    const url = `app/services/products.${searchString}.json`;

    let results = this.$http.get(url)
          .success(results => {

            if (__DEV__) {
              console.log('results: ', results);
            }

            // like backbone's `parse`; for rendering,
            // we only care about a subset of the properties ATG sends back :)
            this.products = results.p;
            this.notifyObservers();
          })
          .error( err => {
            // console.error("unable to retrieve products: ", err);
            alert('unable to find product: ' + searchString + ".  Please try again.");
          });;

    return results;
  }
}

ProductsService.$inject = ['$http', '$rootScope'];

export {ProductsService};
