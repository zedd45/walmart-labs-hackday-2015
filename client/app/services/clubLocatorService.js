class ClubLocatorService {

  constructor($http) {
    this.$http = $http;
  }

  getClubsNear () {
    const url = 'app/services/clubs.json';
    return this.$http.get(url);
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

ClubLocatorService.$inject = ['$http'];

export {ClubLocatorService};
