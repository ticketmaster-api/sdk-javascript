import all from '../utils/all';
import find from '../utils/find';

export const api = 'discovery/v1';

export const Attraction = (apiKey) => ({
  all: all(api, apiKey, 'attractions'),
  find: find(api, apiKey, 'attractions')
});

export const Category = (apiKey) => ({
  all: all(api, apiKey, 'categories'),
  find: find(api, apiKey, 'categories')
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
  category: Category(apiKey),
  event: Event(apiKey),
  venue: Venue(apiKey)
});
