var Promise = require('bluebird');
var requestAsync = require('../../../helpers/request_helper');
var config = require('../../../../config');

module.exports = function(apiKey) {
  return function(venueId) {
    return requestAsync({
      url: config.baseURL + '/discovery/v1/venues/' + venueId + '?apikey=' + apiKey,
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
