import annyang from 'annyang';

const commands = {
    'get :product': 'locateProduct',
    'find :product': 'locateClub',
};

class SpeechController {
    constructor () {
        this.mic = annyang.init(commands, true);
        this.debug = false;
    }

    listen () {
        this.mic.start();
    }

    close () {
        this.mic.pause();
    }

    close () {
        this.mic.abort();
    }

    // for dev!
    debug () {
        this.debug = !this.debug;
        this.mic.debug(this.debug);
    }
}

export {SpeechController};
