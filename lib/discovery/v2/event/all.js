var getData = require('../../../helpers/result_helper');

module.exports = function(apiKey) {
  return function(options) {
    options = options || {};
    options.apikey = apiKey;
    var params = {
      url: [
        'discovery/v2',
        'events'
      ],
      qs: options
    };
    return getData(params);
  };
};
