class ClubController {
    constructor (clubLocatorService) {
        const clubs = []
        this.clubs = clubs;
        this.clubLocatorService = clubLocatorService;
    }


}

ClubController.$inject = ['ClubLocatorService']

export {ClubController};
