var Promise      = require('bluebird');
var requestAsync = require('../../../helpers/request_helper');
var config       = require('../../../../config');

module.exports = function(apiKey, accessToken) {
  return function(venueId) {
    return requestAsync({
      url: config.baseURL + '/discovery/v1/venues/' + venueId + '?apikey=' + apiKey,
      method: 'GET'
    })
    .then(function (response) {
      if(response.statusCode === 200) {
        return JSON.parse(response.body);
      } else {
        parsedBody = JSON.parse(response.body);
        return Promise.reject(parsedBody);
      }
    });
  }
};
