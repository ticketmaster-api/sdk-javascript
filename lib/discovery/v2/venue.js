import find from '../../utils/find';

import {api} from './';

export default (apiKey) => ({
  find: find(api, apiKey, 'venues')
});
