var attraction = require('./attraction'),
    category = require('./category'),
    event = require('./event'),
    venue = require('./venue');

module.exports = function(apiKey, accessToken) {
  return {
    attraction: event(apiKey, accessToken),
    category: event(apiKey, accessToken),
    event: event(apiKey, accessToken),
    venue: event(apiKey, accessToken)
  };
};
