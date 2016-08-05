import attraction from './attraction';
import category from './category';
import event from './event';
import venue from './venue';

export const api = 'discovery/v1';

export default (apiKey) => ({
  attraction: attraction(apiKey),
  category: category(apiKey),
  event: event(apiKey),
  venue: venue(apiKey)
});
