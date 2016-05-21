var chai      = require("chai");
var should    = chai.should();
var getEventJson = require('../../../fixtures/discovery/v1/event/find-200')[0].response;
var ParseResponse = require('../../../../lib/discovery/v1/event/parse_response');

describe('discovery.v1.event.parseResponse', function() {
  describe('success', function() {
    it('should return an Event object', function(done) {
      ParseResponse(getEventJson).should.be.a('object');
      done();
    });

    it('should set name', function(done) {
      ParseResponse(getEventJson).name.should.eq('Monster Jam');
      done();
    });

    it('should set locale', function(done) {
      ParseResponse(getEventJson).locale.should.eq('en-us');
      done();
    });

    it('should set categories', function(done) {
      ParseResponse(getEventJson).categories.should.be.a('array');
      ParseResponse(getEventJson).categories[0].should.be.a('object');
      ParseResponse(getEventJson).categories[1].should.be.a('object');
      done();
    });

    it('should set attractions', function(done) {
      ParseResponse(getEventJson).attractions.should.be.a('array');
      ParseResponse(getEventJson).attractions[0].should.be.a('object');
      done();
    });

    it('should set venue', function(done) {
      ParseResponse(getEventJson).venue.should.be.a('object');
      done();
    });
  });
});
