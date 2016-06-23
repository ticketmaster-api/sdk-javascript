var Subgenre = require('./model');

module.exports = function(response) {
  var subgenre = new Subgenre;

  subgenre.id = response.id;
  subgenre.name = response.name;

  return subgenre;
};
