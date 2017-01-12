var Event = require('../../../dist/node/discovery/v2').Event

function logNextPage(page) {
  console.log(page.page.number, page.items.map(function(item) {
    return item.name
  }))

  return page.getNext()
}

Event('YOUR_API_KEY').all({page: 4, size: 5, city: 'London'})
  .then(logNextPage)
  .then(logNextPage)
  .then(logNextPage)
  .catch(function(e) {
    console.log(e)
  })
