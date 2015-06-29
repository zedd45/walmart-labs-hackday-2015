class ClubController {

    constructor (clubLocatorService, $rootScope) {
        let update = this.updateClubs.bind(this);
        this.clubLocatorService = clubLocatorService;
        $rootScope.$on('clubs:updated', update);
    }

    updateClubs (e, data) {
        this.clubs = data;
    }
}

ClubController.$inject = ['ClubLocatorService', '$rootScope']

export {ClubController};
