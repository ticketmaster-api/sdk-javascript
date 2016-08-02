import fetch from 'isomorphic-fetch';
import queryString from 'query-string';

import config from '../../config';
import Page from '../page';

/**
 * Main GET Data configuration function for API
 *
 * @param url {string}
 * @param qs {string}
 * @param options {object}
 *
 * @returns {promise}
 */
const getData = ({url, qs, options = {method: 'GET'}}) => {
  return fetch(`${[config.baseURL].concat(url).join('/')}?${queryString.stringify(qs)}`, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }

      return res.json().then(Promise.reject.bind(Promise));
    })
    .then((json) => json.page ? new Page({items: json._embedded && json._embedded[url[1]], page: json.page}) : json);
};

export default getData;
