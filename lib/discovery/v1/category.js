import all from '../utils/all';
import find from '../utils/find';

export default (apiKey) => ({
  all: all(apiKey, 'categories'),
  find: find(apiKey, 'categories')
});
