import offer from './offer';

export const api = 'commerce/v2';

export default (apikey) => ({
  offer: offer(apikey)
});
