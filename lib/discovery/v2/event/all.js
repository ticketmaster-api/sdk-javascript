var getData = require('../../../helpers/result_helper');

module.exports = function(apiKey, accessToken) {
  return function(options) {
    var options = options || {};
    options.apikey = apiKey;
    var params = {
      url: [
        'discovery/v2',
        'events'
      ],
      qs: options
    };
    return getData(params);
  }
};