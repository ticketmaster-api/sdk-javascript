var Promise = require('bluebird');
var requestAsync = require('../../../helpers/request_helper');
var config = require('../../../../config');

module.exports = function(apiKey, accessToken) {
  return function(attractionId) {
    return requestAsync({
      url: config.baseURL + '/discovery/v1/attractions/' + attractionId + '?apikey=' + apiKey,
      method: 'GET'
    })
      .then(function(response) {
        var parsedBody = JSON.parse(response.body);
        if (response.statusCode === 200) {
          return parsedBody;
        } else {
          return Promise.reject(parsedBody);
        }
      });
  };
};
