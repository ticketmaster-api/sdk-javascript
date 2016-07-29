var getData = require('../../../helpers/result_helper');

module.exports = function(apiKey) {
  return function(attractionId) {
    var params = {
      url: [
        'discovery/v2',
        'attractions',
        attractionId
      ],
      qs: {apikey: apiKey}
    };
    return getData(params);
  };
};
