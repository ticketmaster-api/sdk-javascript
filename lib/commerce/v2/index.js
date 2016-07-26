var offer = require('./offer');

module.exports = function(apiKey, accessToken) {
  return { offer: offer(apiKey, accessToken) };
};

module.exports.offer = offer;