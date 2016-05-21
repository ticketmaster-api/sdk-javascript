var chai      = require("chai");
var should    = chai.should();
var getAttractionJson = require('../../../fixtures/discovery/v1/attraction/find-200')[0].response;
var ParseResponse = require('../../../../lib/discovery/v1/attraction/parse_response');

describe('discovery.v1.attraction.parseResponse', function() {
  describe('success', function() {
    it('should return a Attraction object', function(done) {
      ParseResponse(getAttractionJson).should.be.a('object');
      done();
    });

    it('should set name', function(done) {
      ParseResponse(getAttractionJson).name.should.eq('Monster Jam');
      done();
    });

    it('should set id', function(done) {
      ParseResponse(getAttractionJson).id.should.eq('1542376');
      done();
    });

    it('should set url', function(done) {
      ParseResponse(getAttractionJson).url.should.eq('/Monster-Jam-tickets/artist/1542376');
      done();
    });

    it('should set image_url', function(done) {
      ParseResponse(getAttractionJson).image_url.should.eq('/dam/a/538/8948796f-1145-44d1-b738-c4308059d538_55751_EVENT_DETAIL_PAGE_16_9.jpg');
      done();
    });
  });
});
