var v1 = require('./v1');
var v2 = require('./v2');

module.exports = function(apiKey, accessToken) {
  return {
    v1: v1(apiKey, accessToken),
    v2: v2(apiKey, accessToken)
  };
};

module.exports.v1 = v1;
module.exports.v2 = v2;
