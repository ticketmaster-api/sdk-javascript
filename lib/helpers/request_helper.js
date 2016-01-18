var Promise = require('bluebird');
var request = require('request');

var requestAsync = Promise.promisify(request.defaults({
  headers: {
    'Accept': 'application/json'
  },
  timeout: 30000
}));

module.exports = requestAsync
