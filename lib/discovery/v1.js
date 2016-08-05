import all from '../utils/all'
import find from '../utils/find'

export const api = 'discovery/v1'

export const Attraction = (apikey) => ({
  all:  all(api, apikey, 'attractions'),
  find: find(api, apikey, 'attractions')
})

export const Category = (apikey) => ({
  all:  all(api, apikey, 'categories'),
  find: find(api, apikey, 'categories')
})

export const Event = (apikey) => ({
  all:        all(api, apikey, 'events'),
  find:       find(api, apikey, 'events'),
  findImages: find(api, apikey, 'events', 'images')
})

export const Venue = (apikey) => ({
  all:  all(api, apikey, 'venues'),
  find: find(api, apikey, 'venues')
})

export default (apikey) => ({
  attraction: Attraction(apikey),
  category:   Category(apikey),
  event:      Event(apikey),
  venue:      Venue(apikey)
})
