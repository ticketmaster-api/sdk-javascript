import all from '../../utils/all';
import find from '../../utils/find';

import {api} from './';

export default (apiKey) => ({
  all: all(api, apiKey, 'venues'),
  find: find(api, apiKey, 'venues')
});
