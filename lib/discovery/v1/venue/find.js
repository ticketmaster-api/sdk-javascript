var Promise      = require('bluebird');
var requestAsync = require('../../../helpers/request_helper');
var config       = require('../../../../config');

module.exports = function(apiKey, accessToken) {
  return function(venueId) {
    return requestAsync({
      url: config.baseURL + '/discovery/v1/venues/' + venueId + '?apikey=' + apiKey,
      method: 'GET'
    })
    .spread(function (response, body) {
      if(response.statusCode === 200) {
        return JSON.parse(body);
      } else {
        parsedBody = JSON.parse(body);
        return Promise.reject(parsedBody);
      }
    });
  }
};
