var getData = require('../../../helpers/result_helper');

module.exports = function(apiKey) {
  return function(venueId) {
    var params = {
      url: [
        'discovery/v2',
        'venues',
        venueId
      ],
      qs: {apikey: apiKey}
    };
    return getData(params);
  };
};
