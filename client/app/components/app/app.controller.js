/**
 * poor man's router: as in we are running out of time
 * show and hide the subsections based on which is already showing
 * TODO: this should instead use the ui router
 */
class AppController {

  constructor ($rootScope) {
    /*
    $rootScope.$on('products:updated', () => {
      debugger;
      this.products = true;
      this.showClubs = false;
    });
    $rootScope.$on('clubs:updated', () => {
      debugger;
      this.showClubs = true;
      this.showProducts = false;
    });
    */

    let clubsUpdated = this.clubsUpdated.bind(this);
    let productsUpdated = this.productsUpdated.bind(this);

    $rootScope.$on('clubs:updated', clubsUpdated);
    $rootScope.$on('products:updated', productsUpdated);
  }


  clubsUpdated () {
    debugger;
    this.showClubs = true;
    this.showProducts = false;
  }

  productsUpdated () {
    debugger;
    this.showProducts = true;
    this.showClubs = false;
  }
}

AppController.$inject = ['$rootScope'];

export {AppController};
