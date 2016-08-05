import getData from './utils/getData';

/**
 * Page object constructor
 * @param options
 * @constructor
 */
class Page {
  constructor({_embedded, page}, path, qs) {
    const itemKey = Object.keys(_embedded)[0];

    this.items = _embedded[itemKey];
    this.page = page;
    this.path = path;
    this.qs = qs;
  }

  /**
   * Method of Page object type
   * Gets some page of results by it's number passed as param.
   * @param n {number}
   * @returns {Promise}
   */
  getAt(n) {
    const qs = Object.assign({}, this.qs, {page: n});

    if (n > 0 && n <= this.page.totalPages) {
      return getData({path: this.path, qs});
    }

    return Promise.reject({message: 'You should pass correct page number.', qs});
  };

  /**
   * Method of Page object type
   * (Iterator method) Gets next page of same type results
   * @param step {number}
   * @returns {Promise}
   */
  getNext(step = 1) {
    const n = this.page.number + step;
    const qs = Object.assign({}, this.qs, {page: n});

    if (n <= this.page.totalPages) {
      return getData({path: this.path, qs});
    }

    return Promise.reject({message: 'No next page! You are on the last.', qs});
  };

  /**
   * Method of Page object type
   * (Iterator method) Gets previous page of same type results
   * @param step {number}
   * @returns {Promise}
   */
  getPrev(step = 1) {
    const n = this.page.number - step;
    const qs = Object.assign({}, this.qs, {page: n});

    if (n > 0) {
      return getData({path: this.path, qs});
    }

    return Promise.reject({message: 'No previous page! You are on the first one.', qs});
  };

  /**
   * Method of Page object type
   * Checker if current result page is the last one
   * @returns {boolean}
   */
  isLast() {
    return this.page.number === this.page.totalPages;
  };

  /**
   * Method of Page object type
   * @returns {number} quantity of all items of the same type
   */
  count() {
    return this.page.totalElements;
  };
}

export default Page;
