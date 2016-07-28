/**
 * Module dependencies and locals
 */
var Promise      = require('bluebird');
var requestAsync = require('./request_helper');
var config       = require('../../config');
var params;

/**
 * Result object constructor
 * @param options
 * @constructor
 */
var Result = function (options) {
  var opt = options || {};
  this.items = opt.items || null;
  this.page = opt.page || null;
  params = opt.params;
};

/**
 * Main GET Data configuration function for API
 * @param obj {object} Configuration object
 * @returns {promise}
 */
var getData = function(obj) {
  return requestAsync({
    url: [config.baseURL].concat(obj.url).join('/'),
    method: obj.method || 'GET',
    qs: obj.qs
  })
  .spread(function (response, body) {
    if(response.statusCode === 200) {
      var result = JSON.parse(body);
      if (obj.url[2]) {
        return result;
      } else {
        return new Result({
          items: result._embedded && result._embedded[obj.url[1]],
          page: result.page,
          params: obj
        });
      }
    } else {
      return Promise.reject(JSON.parse(body));
    }
  });
};

/**
 * Method of Result object type
 * Gets some page of results by it's number passed as param.
 * @param page {number}
 * @returns {promise}
 */
Result.prototype.getPage = function (page) {
  if (page && this.page && page > 0 && page <= this.page.totalPages) {
    params.qs.page = page;
    return getData(params);
  } else {
    return Promise.reject({message: 'You should pass correct page number.', page: page});
  }
};

/**
 * Method of Result object type
 * (Iterator method) Gets next page of same type results
 * @param step {number}
 * @returns {promise}
 */
Result.prototype.nextPage = function (step) {
  var step = step || 1;
  if (this.page && this.page.number <= this.page.totalPages) {
    params.qs.page = this.page.number + step;
    return getData(params);
  } else {
    return Promise.reject({message: 'No next page! You are on the last.', params: params});
  }
};

/**
 * Method of Result object type
 * (Iterator method) Gets previous page of same type results
 * @param step {number}
 * @returns {promise}
 */
Result.prototype.previousPage = function (step) {
  var step = step || 1;
  if (this.page && this.page.number > 0) {
    params.qs.page = this.page.number - step;
    return getData(params);
  } else {
    return Promise.reject({message: 'No previous page! You are on the first one.', params: params});
  }
};

/**
 * Method of Result object type
 * @returns {array|null}
 */
Result.prototype.records = function () {
  return this.items;
};

/**
 * Method of Result object type
 * @returns {number} quantity of all items of the same type
 */
Result.prototype.count = function () {
  return this.page && this.page.totalElements || 0;
};

/**
 * Method of Result object type
 * Checker if current result page is the last one
 * @returns {boolean}
 */
Result.prototype.isLastPage = function () {
  return this.page.number === this.page.totalPages;
};

/**
 * Module interface
 * @type {getData}
 */
module.exports = getData;