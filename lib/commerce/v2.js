import find from '../utils/find'

const api = 'commerce/v2'

export const Offer = (apikey) => ({
  find: find(api, apikey, 'events', 'offers')
})

export default (apikey) => ({
  offer: Offer(apikey)
})
