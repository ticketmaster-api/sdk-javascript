var attraction = require('./attraction');
var category = require('./category');
var event = require('./event');
var venue = require('./venue');

module.exports = function(apiKey, accessToken) {
  return {
    attraction: attraction(apiKey, accessToken),
    category: category(apiKey, accessToken),
    event: event(apiKey, accessToken),
    venue: venue(apiKey, accessToken)
  };
};

module.exports.attraction = attraction;
module.exports.category = category;
module.exports.event = event;
module.exports.venue = venue;
