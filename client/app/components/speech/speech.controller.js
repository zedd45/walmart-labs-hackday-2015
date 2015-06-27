import annyang from 'annyang';

class SpeechController {
    constructor (clubLocatorService) {
        const commands = {
            'show me *product': this.showProduct,
            'find a club': this.locateClub
        };

        this.clubLocatorService = clubLocatorService;

        window.annyang.init(commands, false);
    }

    start () {
        if (__DEV__) {
            this.debug();
        }
        window.annyang.start();
    }

    pause () {
        window.annyang.pause();
    }

    close () {
        window.annyang.abort();
    }

    debug () {
        window.annyang.debug(__DEV__);
    }

    stopDebug () {
        window.annyang.debug(false);
    }

    showProduct () {
        debugger;
        // use the product service here to locate the product
    }

    locateClub () {
        let callback = this.getClubs.bind(this);
        let position = navigator.geolocation && navigator.geolocation.getCurrentPosition(callback);
    }

    getClubs (location) {
        let coords = location && location.coords;
        this.clubLocatorService.getClubsNear(coords).success(function (data) {
            debugger;
            this.clubs = data;
        });
    }
}

SpeechController.$inject = ['ClubLocatorService']

export {SpeechController};
