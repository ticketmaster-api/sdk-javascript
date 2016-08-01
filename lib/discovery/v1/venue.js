import all from './utils/all';
import find from './utils/find';

export default (apiKey) => ({
  all: all(apiKey, 'venues'),
  find: find(apiKey, 'venues')
});
