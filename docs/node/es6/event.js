import {Event} from '../../../dist/node/discovery/v2'

const logNextPage = (page) => {
  console.log(page.page.number, page.items.map(({name}) => name))

  return page.getNext()
}

Event('YOUR_API_KEY').all({page: 4, size: 5, city: 'London'})
  .then(logNextPage)
  .then(logNextPage)
  .then(logNextPage)
  .catch((e) => console.log(e))
