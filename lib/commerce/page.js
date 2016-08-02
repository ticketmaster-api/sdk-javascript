import getData from './utils/getData';

let params;

/**
 * Page object constructor
 * @param options
 * @constructor
 */
// TODO fix params
class Page {
  constructor({items, page, params}) {
    this.items = items;
    this.page = page;
  }

  /**
   * Method of Page object type
   * Gets some page of results by it's number passed as param.
   * @param page {number}
   * @returns {promise}
   */
  getPage(page) {
    if (page && this.page && page > 0 && page <= this.page.totalPages) {
      params.qs.page = page;

      return getData(params);
    }

    return Promise.reject({message: 'You should pass correct page number.', page});
  };

  /**
   * Method of Page object type
   * (Iterator method) Gets next page of same type results
   * @param step {number}
   * @returns {promise}
   */
  nextPage(step = 1) {
    if (this.page && this.page.number <= this.page.totalPages) {
      params.qs.page = this.page.number + step;

      return getData(params);
    }

    return Promise.reject({message: 'No next page! You are on the last.', params});
  };

  /**
   * Method of Page object type
   * (Iterator method) Gets previous page of same type results
   * @param step {number}
   * @returns {promise}
   */
  previousPage(step = 1) {
    if (this.page && this.page.number > 0) {
      params.qs.page = this.page.number - step;

      return getData(params);
    }

    return Promise.reject({message: 'No previous page! You are on the first one.', params});
  };

  /**
   * Method of Page object type
   * @returns {array|null}
   */
  records() {
    return this.items;
  };

  /**
   * Method of Page object type
   * @returns {number} quantity of all items of the same type
   */
  count() {
    return this.page && this.page.totalElements || 0;
  };

  /**
   * Method of Page object type
   * Checker if current result page is the last one
   * @returns {boolean}
   */
  isLastPage() {
    return this.page.number === this.page.totalPages;
  };
}

export default Page;
