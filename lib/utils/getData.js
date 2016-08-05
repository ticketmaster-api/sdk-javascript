import fetch from 'isomorphic-fetch';
import queryString from 'query-string';

import config from '../config';
import Page from '../page';

const getURL = (path, qs) => {
  return `${[config.baseURL].concat(path).join('/')}?${queryString.stringify(qs)}`;
};

/**
 * Main GET Data configuration function for API
 *
 * @param path {array}
 * @param qs {string}
 *
 * @returns {promise}
 */
const getData = ({path, qs}) => {
  return fetch(getURL(path, qs))
    .then((res) => (res.status === 200) ? res.json() : res.json().then(Promise.reject.bind(Promise)))
    .then((json) => json.page ? new Page(json, path, qs) : json);
};

export default getData;
