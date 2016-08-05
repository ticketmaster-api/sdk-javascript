import attraction from './attraction';
import classification from './classification';
import event from './event';
import venue from './venue';

export const api = 'discovery/v2';

export default (apiKey) => ({
  attraction: attraction(apiKey),
  classification: classification(apiKey),
  event: event(apiKey),
  venue: venue(apiKey)
});
