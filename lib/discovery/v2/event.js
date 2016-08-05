import all from '../../utils/all';
import find from '../../utils/find';

import {api} from './';

export default (apiKey) => ({
  all: all(api, apiKey, 'events'),
  find: find(api, apiKey, 'events'),
  findImages: find(api, apiKey, 'events', 'images')
});
