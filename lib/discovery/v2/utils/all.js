var getData = require('../../../helpers/result_helper');

module.exports = function(apiKey, type) {
  return function(options = {}) {
    options.apikey = apiKey;
    var params = {
      url: ['discovery/v2', type],
      qs: options
    };

    return getData(params);
  };
};
