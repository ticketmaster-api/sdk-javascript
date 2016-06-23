var Genre = require('./model');
var SubgenreParser = require('../subgenre/parse_response');

module.exports = function(response) {
  var genre = new Genre;

  genre.id = response.id;
  genre.name = response.name;

  response._embedded.genres.forEach(function(response) {
    genre.subgenres.push(SubgenreParser(response));
  });

  return genre;
};
