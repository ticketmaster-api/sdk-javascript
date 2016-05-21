var chai      = require("chai");
var should    = chai.should();
var getVenueJson = require('../../../fixtures/discovery/v1/venue/find-200')[0].response;
var ParseResponse = require('../../../../lib/discovery/v1/venue/parse_response');

describe('discovery.v1.venue.parseResponse', function() {
  describe('success', function() {
    it('should return a Venue object', function(done) {
      ParseResponse(getVenueJson).should.be.a('object');
      done();
    });

    it('should set name', function(done) {
      ParseResponse(getVenueJson).name.should.eq('Alamodome');
      done();
    });

    it('should set id', function(done) {
      ParseResponse(getVenueJson).id.should.eq('475247');
      done();
    });

    it('should set country', function(done) {
      ParseResponse(getVenueJson).country.should.eq('US');
      done();
    });

    it('should set state', function(done) {
      ParseResponse(getVenueJson).state.should.eq('TX');
      done();
    });

    it('should set city', function(done) {
      ParseResponse(getVenueJson).city.should.eq('San Antonio');
      done();
    });

    it('should set postal_code', function(done) {
      ParseResponse(getVenueJson).postal_code.should.eq('78203');
      done();
    });

    it('should set latitude', function(done) {
      ParseResponse(getVenueJson).latitude.should.eq('29.417054662');
      done();
    });

    it('should set longitude', function(done) {
      ParseResponse(getVenueJson).longitude.should.eq('-98.479151396');
      done();
    });

    it('should set address_line_1', function(done) {
      ParseResponse(getVenueJson).address_line_1.should.eq('100 Montana St');
      done();
    });

    it('should set address_line_2', function(done) {
      ParseResponse(getVenueJson).address_line_2.should.eq('San Antonio, TX');
      done();
    });

    it('should set time_zone', function(done) {
      ParseResponse(getVenueJson).time_zone.should.eq('America/Chicago');
      done();
    });
  });
});
