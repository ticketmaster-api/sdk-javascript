var Classification = require('./model');
var SegmentParser = require('../segment/parse_response');

module.exports = function(response) {
  var classification = new Classification;

  classification.segment = SegmentParser(response._embedded.segment);

  return classification;
};
