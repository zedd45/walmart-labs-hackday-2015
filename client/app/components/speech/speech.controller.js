import annyang from 'annyang';

class SpeechController {
    constructor () {
        const commands = {
            'show me *product': this.showProduct,
            'find a club near me': this.locateClub
        };

        window.annyang.init(commands, false);
    }

    start () {
        window.annyang.debug();
        window.annyang.start();
    }

    pause () {
        window.annyang.pause();
    }

    close () {
        window.annyang.abort();
    }

    // TODO: remove dev elements with feature flags?
    // https://github.com/petehunt/webpack-howto#6-feature-flags
    debug () {
        window.annyang.debug(true);
    }

    stopDebug () {
        window.annyang.debug(false);
    }

    showProduct () {
        debugger;
        // use the product service here to locate the product
    }

    locateClub () {
        debugger;
        // use a location service to get and store the geolocation
        // use the club service to locate the club
    }
}

export {SpeechController};
