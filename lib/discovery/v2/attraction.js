import all from '../../utils/all';
import find from '../../utils/find';

export default (apiKey) => ({
  all: all(apiKey, 'attractions'),
  find: find(apiKey, 'attractions')
});
