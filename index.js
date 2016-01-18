var discovery = require('./lib/discovery');

var API = function(apiKey, accessToken) {
  return {
    apiKey: apiKey,
    accessToken: accessToken,
    discovery: discovery(apiKey, accessToken)
  }
};

module.exports = function(apiKey, accessToken) {
  return API(apiKey, accessToken);
};

module.exports.discovery = discovery;
