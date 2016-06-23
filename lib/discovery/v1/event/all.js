var Promise      = require('bluebird');
var requestAsync = require('../../../helpers/request_helper');
var config       = require('../../../../config');

module.exports = function(apiKey, accessToken) {
  return function(options) {
    options = options || {};
    options.apikey = apiKey;

    return requestAsync({
      url: config.baseURL + '/discovery/v1/events/',
      method: 'GET',
      qs: options
    })
    .spread(function (response, body) {
      if(response.statusCode === 200) {
        var result = JSON.parse(body);
        return result._embedded.events;
      } else {
        parsedBody = JSON.parse(body);
        return Promise.reject(parsedBody);
      }
    });
  }
};
