var getData = require('../../../helpers/result_helper');

module.exports = function(apiKey, accessToken) {
  return function(options) {
    options = options || {};
    options.apikey = apiKey;
    var params = {
      url: [
        'discovery/v2',
        'classifications'
      ],
      qs: options
    };
    return getData(params);
  }
};
