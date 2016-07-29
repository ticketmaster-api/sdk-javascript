var getData = require('../../../helpers/result_helper');

module.exports = function(apiKey) {
  return function(classificationId) {
    var params = {
      url: [
        'discovery/v2',
        'classifications',
        classificationId
      ],
      qs: {apikey: apiKey}
    };
    return getData(params);
  };
};
