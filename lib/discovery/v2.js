import all from '../utils/all';
import find from '../utils/find';

const api = 'discovery/v2';

export const Attraction = (apikey) => ({
  all:  all(api, apikey, 'attractions'),
  find: find(api, apikey, 'attractions')
});

export const Classification = (apikey) => ({
  all:  all(api, apikey, 'classifications'),
  find: find(api, apikey, 'classifications')
});

export const Event = (apikey) => ({
  all:        all(api, apikey, 'events'),
  find:       find(api, apikey, 'events'),
  findImages: find(api, apikey, 'events', 'images')
});

export const Venue = (apikey) => ({
  all:  all(api, apikey, 'venues'),
  find: find(api, apikey, 'venues')
});

export default (apikey) => ({
  attraction:     Attraction(apikey),
  classification: Classification(apikey),
  event:          Event(apikey),
  venue:          Venue(apikey)
});
