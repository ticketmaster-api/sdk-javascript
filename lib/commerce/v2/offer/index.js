import find from './find';

export default (apiKey, accessToken) => ({
  find: find(apiKey, accessToken)
});
