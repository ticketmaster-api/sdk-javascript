var Attraction = require('./model');

module.exports = function(response) {
  var attraction = new Attraction;

  attraction.id = response.id;
  attraction.name = response.name;
  attraction.url = response.url;
  attraction.url = response.url;
  attraction.image_url = response.image.url;

  return attraction;
};
