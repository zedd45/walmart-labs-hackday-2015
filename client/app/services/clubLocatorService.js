class ClubLocatorService {

  constructor($http, $rootScope) {
    this.$http = $http;
    this.$rootScope = $rootScope;
    this.clubs = [];
  }

  notifyObservers () {
    this.$rootScope.$broadcast('clubs:updated', this.clubs);
  }

  getClubsNear () {
    const url = 'app/services/clubs.json';
    let results = this.$http.get(url)
          .success(results => {

            if (__DEV__) {
              console.log('results: ', results);
            }

            this.clubs = results;
            this.notifyObservers();
          })
          .error( err => {
            console.error("unable to retrieve clubs: ", err);
          });;
  }

  /* even with m.samsclub.com in our host file, this won't work; need the api keys
     which are in `full_url` in sams mweb core config
  getClubsNear (coordinates) {
    let latitude = coordinates.latitude;
    let longitude = coordinates.longitude;

    if (!latitude || !longitude) {
        throw new Error(`unable to parse latitude (${latitude}) or longitude (${longitude})`);
    }
    // Do we trust RFI to stay up?
    let url = `http://m.samsclub.com/api/rfi/clubs/PlatformServices/Rest/V2/Clubs/Near/${latitude},${longitude}`

    // http://m.samsclub.com/api/rfi/clubs/PlatformServices/Rest/V2/Clubs/8203?loadServices=true&loadServiceTypes=true&loadSchedules=true&loadScheduleDetails=true&loadEvents=true&loadMessages=true
    return this.$http.get(url);
  }
  */
}

ClubLocatorService.$inject = ['$http', '$rootScope'];

export {ClubLocatorService};
