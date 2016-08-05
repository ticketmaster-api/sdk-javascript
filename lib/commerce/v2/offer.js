import find from '../../utils/find';

import {api} from './';

export default (apikey) => ({
  find: find(api, apikey, 'events', 'offers')
});
