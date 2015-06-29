import annyang from 'annyang';

class SpeechController {
    constructor (productsService, clubLocatorService) {

        // TODO: can we just use fat arrow to bind this scope (by returning an object)?
        let showProduct = this.showProduct.bind(this);
        let locateClub = this.locateClub.bind(this);

        const commands = {
            // product aliases
            'show *product': showProduct,
            'display *product': showProduct,
            'search for *product': showProduct,
            // club aliases
            'find a club': locateClub,
            'locate a club': locateClub,
        };

        this.productsService = productsService;
        this.clubLocatorService = clubLocatorService;

        window.annyang.addCommands(commands);
    }

    start () {
        if (__DEV__) {
            this.debug();
        }
        window.annyang.start();
    }

    stop () {
        this.debugOff();
        window.annyang.abort();
    }

    pause () {
        window.annyang.pause();
    }

    debug () {
        window.annyang.debug(true);
    }

    debugOff () {
        window.annyang.debug(false);
    }

    showProduct (product) {
        this.pause();
        this.productsService.getProducts(product);
    }

    locateClub () {
        this.pause();
        let callback = this.getClubs.bind(this);
        let position = navigator.geolocation && navigator.geolocation.getCurrentPosition(callback);
    }

    getClubs (location) {
        let coords = location && location.coords || null;
        this.clubLocatorService.getClubsNear(coords);
    }
}

SpeechController.$inject = ['ProductsService', 'ClubLocatorService']

export {SpeechController};
