'use strict';

class scCarousel {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = 'app/components/carousel/carousel.html';
    this.replace = true;
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.scope = {};
  }

 /* @ngInject */
  controller(CarouselService) {
    this.carouselService = CarouselService;
    this.currentIndex = 1;
    this.carouselProducts = [];
    this.carouselSize = 0;
    this.currentIndex = 1;
    this.numToShow = 5;

    this.fetchProducts = () => {
      this.carouselService.getProducts().then((results) => {
        // this.carouselProducts = results.data.payload;
        angular.forEach(results.data.payload,(item) => {
          this.carouselProducts.push(item);
        });
        this.carouselSize = results.data.size;
      }, (error) => {
        console.error(`error is ${error}`);
      });
    };

    this.fetchProducts();
  }

  link(scope, element, attrs, vm) {
      var $elem = $(element),
        listItem, elSize;

      let cards = $elem.find('.cards');
      scope.next = () => {
        var productSize = Object.keys(vm.carouselProducts).length;

        listItem = $elem.find('li');

        if (vm.currentIndex === 1) {
          elSize = listItem.width() + parseInt(listItem.css('margin-right'), 10);
        }

        var totalPages = vm.carouselSize / (vm.numToShow - 1);

        if (vm.currentIndex < totalPages) {
          var itemsOnRight = vm.carouselSize - (vm.currentIndex) * (vm.numToShow - 1);
          var offset = parseInt(cards.css('left'));
          vm.currentIndex +=1;
          if (productSize < vm.carouselSize) {
            // console.log('need mas images');
            vm.fetchProducts();
          }

          if (itemsOnRight < vm.numToShow) {
            scope.lastWidth= cards.width() - $elem.find('.sc-carousel').width() - parseInt(listItem.css('margin-right'));
            offset=-(scope.lastWidth);
          }

          else {
            offset -= (elSize * (vm.numToShow - 1));
          }

          cards.css('left', offset);
        }
      };

      scope.prev = () => {

        var offset;

        if(vm.currentIndex === 2) {
          offset = 0;
        }

        if(vm.currentIndex > 2) {
          offset = parseInt(cards.css('left'));

          offset += (elSize * (vm.numToShow - 1));
          vm.currentIndex--;
        }

        cards.css('left', offset);
      };

      scope.$on('destroy', () => {
        // console.log('destroy');
      });
  }

  static render() {
    return new scCarousel();
  }
}

scCarousel.$inject = ['CarouselService'];

export default scCarousel;


