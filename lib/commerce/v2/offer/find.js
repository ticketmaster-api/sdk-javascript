var getData = require('../../../helpers/result_helper');

module.exports = function(apiKey, accessToken) {
  return function(eventId) {
    var params = {
      url: [
        'commerce/v2',
        'events',
        eventId
      ],
      qs: {apikey: apiKey}
    };
    return getData(params);
  }
};
