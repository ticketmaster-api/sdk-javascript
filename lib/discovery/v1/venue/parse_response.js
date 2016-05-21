var Venue = require('./model');

module.exports = function(response) {
  var venue = new Venue;

  venue.id = response.id;
  venue.name = response.name;
  venue.country = response.country.countryCode;
  venue.state = response.state.stateCode;
  venue.city = response.city.name;
  venue.postal_code = response.postalCode;
  venue.latitude = response.location.latitude;
  venue.longitude = response.location.longitude;
  venue.address_line_1 = response.address.line1;
  venue.address_line_2 = response.address.line2;
  venue.time_zone = response.timeZone;

  return venue;
};
