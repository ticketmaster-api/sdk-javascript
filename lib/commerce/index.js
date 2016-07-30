import v2 from './v2';

export default (apiKey, accessToken) => ({
  v2: v2(apiKey, accessToken)
});
