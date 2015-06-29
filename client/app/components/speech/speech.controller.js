import annyang from 'annyang';

class SpeechController {
    constructor (productsService, clubLocatorService) {

        // TODO: can we just use fat arrow to bind this scope (by returning an object)?
        let showProduct = this.showProduct.bind(this);
        let locateClub = this.locateClub.bind(this);

        const commands = {
            'show *product': showProduct,
            'find a club': locateClub,
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

    showProduct () {
        this.pause();
        this.productsService.getProducts();
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
