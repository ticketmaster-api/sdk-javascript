var Attraction = require('./model');

module.exports = function(response) {
  var attraction = new Attraction;

  attraction.id = response.id;
  attraction.name = response.name;
  attraction.test = response.test;
  attraction.url = response.url;
  attraction.locale = response.locale;
  attraction.images = response.images;
  attraction.classifications = response.classifications;

  return attraction;
};
