var attraction = require('./attraction'),
    event      = require('./event'),
    venue      = require('./venue');

module.exports = function(apiKey, accessToken) {
  return {
    attraction: attraction(apiKey, accessToken),
    event: event(apiKey, accessToken),
    venue: venue(apiKey, accessToken)
  };
};

module.exports.attraction = attraction;
module.exports.event = event;
module.exports.venue = venue;
