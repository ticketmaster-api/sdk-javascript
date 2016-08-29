'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _isomorphicFetch=require('isomorphic-fetch');var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _queryString=require('query-string');var _queryString2=_interopRequireDefault(_queryString);var _config=require('../config');var _config2=_interopRequireDefault(_config);var _page=require('../page');var _page2=_interopRequireDefault(_page);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var getURL=function getURL(path,qs){return[_config2.default.baseURL].concat(path).join('/')+'?'+_queryString2.default.stringify(qs);};/**
 * Main GET Data configuration function for API
 *
 * @param path {array}
 * @param qs {string}
 *
 * @returns {promise}
 */var getData=function getData(_ref){var path=_ref.path;var qs=_ref.qs;return(0,_isomorphicFetch2.default)(getURL(path,qs)).then(function(res){return res.status===200?res.json():res.json().then(Promise.reject.bind(Promise));}).then(function(json){return json.page?new _page2.default(json,path,qs):json;});};exports.default=getData;module.exports=exports['default'];