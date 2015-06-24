'use strict';

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../app/components/navbar/navbar.controller';

import ProductsCtrl from './products/products.controller';
import ProductsService from './products/products.service';

import CartCtrl from './cart/cart.controller';
import CartService from '../app/shared/services/cart.service';

import miniCart from '../app/components/minicart/minicart.directive';

import CarouselService from '../app/components/carousel/carousel.service';
import scCarousel from '../app/components/carousel/carousel.directive';

angular.module('scApp', ['ngAnimate', 'ngSanitize', 'ui.router'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('ProductsCtrl', ProductsCtrl)
  .controller('CartCtrl', CartCtrl)
  .service('ProductsService', ProductsService)
  .service('CartService', CartService)
  .service('CarouselService', CarouselService)
  .directive('miniCart', miniCart.render)
  .directive('scCarousel', scCarousel.render)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'products'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'app/cart/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      });

    $urlRouterProvider.otherwise('/');
  })
;
