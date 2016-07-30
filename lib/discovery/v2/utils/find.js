var getData = require('../../../helpers/result_helper');

module.exports = function(apiKey, type) {
  return function(id) {
    var params = {
      url: ['discovery/v2', type, id],
      qs: {apikey: apiKey}
    };

    return getData(params);
  };
};
