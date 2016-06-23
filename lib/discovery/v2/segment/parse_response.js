var Segment = require('./model');
var GenreParser = require('../genre/parse_response');

module.exports = function(response) {
  var segment = new Segment;

  segment.id = response.id;
  segment.name = response.name;

  response._embedded.genres.forEach(function(response) {
    segment.genres.push(GenreParser(response));
  });

  return segment;
};
