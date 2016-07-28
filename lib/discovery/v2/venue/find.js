var getData = require('../../../helpers/result_helper');

module.exports = function(apiKey, accessToken) {
  return function(venueId) {
    var params = {
      url: [
        'discovery/v2',
        'events',
        venueId
      ],
      qs: {apikey: apiKey}
    };
    return getData(params);
  }
};
