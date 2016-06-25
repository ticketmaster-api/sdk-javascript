var chai      = require("chai");
var should    = chai.should();
var nock      = require('nock');
var nockBack  = nock.back;
var Find      = require('../../../../lib/commerce/v2/offer/find');

describe('commerce.v2.offer.find', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures/commerce/v2'
  });

  describe('success', function() {
    it('should find offers', function(done) {
      nockBack('offer/find-200.json', {}, function(nockDone) {
        var find = Find('mock-api-key');
        find('vvG1iZKU5jIxKX')
        .then(function(result) {
          result.limits.max.should.equal(14);
          nockDone();
          done();
        });
      });
    });
  });

  describe('not found', function() {
    it('should handle 500', function(done) {
      nockBack('offer/find-500.json', {}, function(nockDone) {
        var find = Find('mock-api-key');
        find('unknown-id')
        .catch(function(response) {
          response.errors[0].code.should.equal('40001');
          nockDone();
          done();
        });
      });
    });
  });
});
