var v1 = require('./v1');

module.exports = function(apiKey, accessToken) {
  return {
    v1: v1(apiKey, accessToken)
  };
};
