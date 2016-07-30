import offer from './offer';

export default (apiKey, accessToken) => ({
  offer: offer(apiKey, accessToken)
});
