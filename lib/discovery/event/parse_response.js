var Event = require('../event');
var CategoryParser = require('../category/parse_response');
var AttractionParser = require('../attraction/parse_response');

module.exports = function(response) {
  var event = new Event;

  event.name = response.name;
  event.locale = response.locale;

  response._embedded.categories.forEach(function(response) {
    event.categories.push(CategoryParser(response));
  });

  response._embedded.attractions.forEach(function(response) {
    event.attractions.push(AttractionParser(response));
  });

  return event;
};
