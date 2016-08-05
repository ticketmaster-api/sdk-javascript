import all from '../../utils/all';
import find from '../../utils/find';

import {api} from './';

export default (apiKey) => ({
  all: all(api, apiKey, 'categories'),
  find: find(api, apiKey, 'categories')
});
