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

    const products = [];
    const observerCallbacks = [];

    this.products = products;
    this.observerCallbacks = observerCallbacks;
  }

  notifyObservers () {
    this.$rootScope.$broadcast('products:updated', this.products);
  }

  getProducts () {
    // TODO: replace with search service from mWeb
    const url = 'app/components/product/products.json';
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
            console.error("unable to retrieve products: ", err);
          });;

    return results;
  }
}

ProductsService.$inject = ['$http', '$rootScope'];

export {ProductsService};
