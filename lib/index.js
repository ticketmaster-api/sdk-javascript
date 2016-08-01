import discovery from './discovery/index';
import commerce from './commerce/index';

const API = (apikey) => ({
  apikey,
  discovery: discovery(apikey),
  commerce: commerce(apikey)
});

export default API;
