var Event = require('./model');
var AttractionParser = require('../attraction/parse_response');
var VenueParser = require('../venue/parse_response');

module.exports = function(response) {
  var event = new Event;

  event.id = response.id;
  event.name = response.name;
  event.locale = response.locale;
  event.test = response.test;
  event.url = response.url;
  event.locale = response.locale;
  event.images = response.images;
  event.sale = response.sale;
  event.date = response.date;
  event.classification = response.classification;
  event.promoter = response.promoter;
  event.info = response.info;
  event.priceRange = response.priceRange;

  response._embedded.attractions.forEach(function(response) {
    event.attractions.push(AttractionParser(response));
  });

  response._embedded.venues.forEach(function(response) {
    event.venues.push(VenueParser(response));
  });

  return event;
};
