import all from '../../utils/all';
import find from '../../utils/find';

const api = 'discovery/v2';

export const Attraction = (apiKey) => ({
  all: all(api, apiKey, 'attractions'),
  find: find(api, apiKey, 'attractions')
});

export const Classification = (apiKey) => ({
  all: all(api, apiKey, 'classifications'),
  find: find(api, apiKey, 'classifications')
});

export const Event = (apiKey) => ({
  all: all(api, apiKey, 'events'),
  find: find(api, apiKey, 'events'),
  findImages: find(api, apiKey, 'events', 'images')
});

export const Venue = (apiKey) => ({
  all: all(api, apiKey, 'venues'),
  find: find(api, apiKey, 'venues')
});

export default (apiKey) => ({
  attraction: Attraction(apiKey),
  classification: Classification(apiKey),
  event: Event(apiKey),
  venue: Venue(apiKey)
});
