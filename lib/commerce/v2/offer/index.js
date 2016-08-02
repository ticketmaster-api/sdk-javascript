import find from '../../utils/find';

export default (apikey) => ({
  find: find(apikey, 'events')
});
