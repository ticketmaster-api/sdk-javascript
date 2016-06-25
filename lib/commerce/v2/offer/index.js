var find = require('./find');

module.exports = function(apiKey, accessToken) {
  return { find: find(apiKey, accessToken) }
};

module.exports.find = find;