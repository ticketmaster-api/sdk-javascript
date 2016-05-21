var Category = require('./model');

module.exports = function(response) {
  var category = new Category;

  category.id = response.id;
  category.name = response.name;
  category.level = response.level;

  return category;
};
