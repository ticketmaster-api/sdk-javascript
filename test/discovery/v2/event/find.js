var chai      = require("chai");
var should    = chai.should();
var nock      = require('nock');
var nockBack  = nock.back;
var Find      = require('../../../../lib/discovery/v2/event/find');

describe('discovery.v2.event.find', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures/discovery/v2'
  });

  describe('success', function() {
    it('should find an event', function(done) {
      nockBack('event/find-200.json', {}, function(nockDone) {
        var find = Find('mock-api-key');
        find('vv17FZfdGkSrrMju')
        .then(function(result) {
          result.name.should.equal("Susquehanna Breakdown RV Pass");
          nockDone();
          done();
        });
      });
    });
  });

  describe('not found', function() {
    it('should handle 404', function(done) {
      nockBack('event/find-404.json', {}, function(nockDone) {
        var find = Find('mock-api-key');
        find('unknown-id')
        .catch(function(response) {
          response.errors[0].code.should.equal('DIS1004');
          nockDone();
          done();
        });
      });
    });
  });
});
