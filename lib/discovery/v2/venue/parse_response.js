var Venue = require('./model');

module.exports = function(response) {
  var venue = new Venue;

  venue.id = response.id;
  venue.name = response.name;
  venue.test = response.test;
  venue.url = response.url;
  venue.locale = response.locale;
  venue.postal_code = response.postalCode;
  venue.timezone = response.timezone;
  venue.city = response.city;
  venue.country = response.country;
  venue.address = response.address;
  venue.location = response.location;
  venue.markets = response.markets;
  venue.dmas = response.dmas;

  return venue;
};
