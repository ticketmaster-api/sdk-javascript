var v2 = require('./v2');

module.exports = function(apiKey, accessToken) {
  return { v2: v2(apiKey, accessToken) };
};

module.exports.v2 = v2;
