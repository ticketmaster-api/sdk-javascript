var Event = require('./model');
var CategoryParser = require('../category/parse_response');
var AttractionParser = require('../attraction/parse_response');
var VenueParser = require('../venue/parse_response');

module.exports = function(response) {
  var event = new Event;

  event.id = response.id;
  event.name = response.name;
  event.locale = response.locale;

  response._embedded.categories.forEach(function(response) {
    event.categories.push(CategoryParser(response));
  });

  response._embedded.attractions.forEach(function(response) {
    event.attractions.push(AttractionParser(response));
  });

  event.venue = VenueParser(response._embedded.venue[0]);

  return event;
};
