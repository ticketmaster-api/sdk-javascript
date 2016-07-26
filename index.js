var discovery = require('./lib/discovery');
var commerce = require('./lib/commerce');

var API = function(apiKey, accessToken) {
  return {
    apiKey: apiKey,
    accessToken: accessToken,
    discovery: discovery(apiKey, accessToken),
    commerce: commerce(apiKey, accessToken)
  }
};

module.exports = function(apiKey, accessToken) {
  return API(apiKey, accessToken);
};

module.exports.discovery = discovery;
module.exports.commerce = commerce;