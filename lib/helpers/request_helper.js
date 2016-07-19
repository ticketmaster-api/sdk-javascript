var Promise = require('bluebird');
var request = require('request');

var requestAsync = Promise.promisify(request.defaults({
  headers: {
    'Accept': 'application/json'
  },
  withCredentials: false,
  timeout: 30000
}));

module.exports = requestAsync;
