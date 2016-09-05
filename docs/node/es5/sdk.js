var ticketmaster = require('../../../dist/node/index');

var sdk = ticketmaster('YOUR_API_KEY');

function logNextPage(page) {
  console.log(page.page.number, page.items.map(function(item) {
    return item.name;
  }));

  return page.getNext();
}

if (sdk) {
  sdk.discovery.v2.event.all({page: 4, size: 5, city: 'London'})
    .then(logNextPage)
    .then(logNextPage)
    .then(logNextPage)
    .catch(function(e) {
      console.log(e);
    });
}
