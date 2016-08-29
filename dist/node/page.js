'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _getData=require('./utils/getData');var _getData2=_interopRequireDefault(_getData);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Page object constructor
 * @param options
 * @constructor
 */var Page=function(){function Page(_ref,path,qs){var _embedded=_ref._embedded;var page=_ref.page;_classCallCheck(this,Page);var itemKey=Object.keys(_embedded)[0];this.items=_embedded[itemKey];this.page=page;this.path=path;this.qs=qs;}/**
   * Method of Page object type
   * Gets some page of results by it's number passed as param.
   * @param n {number}
   * @returns {Promise}
   */_createClass(Page,[{key:'getAt',value:function getAt(n){var qs=_extends({},this.qs,{page:n});if(n>0&&n<=this.page.totalPages){return(0,_getData2.default)({path:this.path,qs:qs});}return Promise.reject({message:'You should pass correct page number.',qs:qs});}},{key:'getNext',/**
   * Method of Page object type
   * (Iterator method) Gets next page of same type results
   * @param step {number}
   * @returns {Promise}
   */value:function getNext(){var step=arguments.length<=0||arguments[0]===undefined?1:arguments[0];var n=this.page.number+step;var qs=_extends({},this.qs,{page:n});if(n<=this.page.totalPages){return(0,_getData2.default)({path:this.path,qs:qs});}return Promise.reject({message:'No next page! You are on the last.',qs:qs});}},{key:'getPrev',/**
   * Method of Page object type
   * (Iterator method) Gets previous page of same type results
   * @param step {number}
   * @returns {Promise}
   */value:function getPrev(){var step=arguments.length<=0||arguments[0]===undefined?1:arguments[0];var n=this.page.number-step;var qs=_extends({},this.qs,{page:n});if(n>0){return(0,_getData2.default)({path:this.path,qs:qs});}return Promise.reject({message:'No previous page! You are on the first one.',qs:qs});}},{key:'isLast',/**
   * Method of Page object type
   * Checker if current result page is the last one
   * @returns {boolean}
   */value:function isLast(){return this.page.number===this.page.totalPages;}},{key:'count',/**
   * Method of Page object type
   * @returns {number} quantity of all items of the same type
   */value:function count(){return this.page.totalElements;}}]);return Page;}();exports.default=Page;module.exports=exports['default'];