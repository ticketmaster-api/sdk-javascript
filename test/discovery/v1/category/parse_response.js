var chai      = require("chai");
var should    = chai.should();
var getCategoryJson = require('../../../fixtures/discovery/v1/category/find-200')[0].response;
var ParseResponse = require('../../../../lib/discovery/v1/category/parse_response');

describe('discovery.v1.category.parseResponse', function() {
  describe('success', function() {
    it('should return a Category object', function(done) {
      ParseResponse(getCategoryJson).should.be.a('object');
      done();
    });

    it('should set name', function(done) {
      ParseResponse(getCategoryJson).name.should.eq('Sports');
      done();
    });

    it('should set id', function(done) {
      ParseResponse(getCategoryJson).id.should.eq('10004');
      done();
    });

    it('should set level', function(done) {
      ParseResponse(getCategoryJson).level.should.eq(1);
      done();
    });
  });
});
