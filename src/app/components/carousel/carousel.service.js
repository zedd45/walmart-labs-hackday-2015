'use strict';

class CarouselService {
  constructor($http) {
    this.$http = $http;
  }

  getProducts() {
    const url = 'app/components/carousel/carousel.json';

    return this.$http.get(url);
  }
}

CarouselService.$inject = ['$http'];

export default CarouselService;
