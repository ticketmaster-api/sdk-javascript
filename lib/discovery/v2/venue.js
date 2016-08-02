import find from '../utils/find';

export default (apiKey) => ({
  find: find(apiKey, 'venues')
});
