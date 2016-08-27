import ticketmaster from '../../../dist/node'

const sdk = ticketmaster('YOUR_API_KEY')

const logNextPage = (page) => {
  console.log(page.page.number, page.items.map(({name}) => name))

  return page.getNext()
}

if (sdk) {
  sdk.discovery.v2.event.all({page: 4, size: 5, city: 'London'})
    .then(logNextPage)
    .then(logNextPage)
    .then(logNextPage)
    .catch((e) => console.log(e))
}
