var event = require('./event');

module.exports = function(apiKey, accessToken) {
  return {
    event: event(apiKey, accessToken)
  };
};
