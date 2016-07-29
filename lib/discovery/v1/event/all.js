var Promise = require('bluebird');
var requestAsync = require('../../../helpers/request_helper');
var config = require('../../../../config');

module.exports = function(apiKey, accessToken) {
  return function(options) {
    options = options || {};
    options.apikey = apiKey;

    return requestAsync({
      url: config.baseURL + '/discovery/v1/events/',
      method: 'GET',
      qs: options
    })
      .then(function(response) {
        var parsedBody = JSON.parse(response.body);
        if (response.statusCode === 200) {
          return parsedBody._embedded.events;
        } else {
          return Promise.reject(parsedBody);
        }
      });
  };
};
