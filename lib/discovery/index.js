var v1 = require('./v1');
var v2 = require('./v2');

module.exports = function(apiKey) {
  return {
    v1: v1(apiKey),
    v2: v2(apiKey)
  };
};
