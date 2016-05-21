var chai      = require("chai");
var should    = chai.should();
var nock      = require('nock');
var nockBack  = nock.back;
var Find      = require('../../../../lib/discovery/v2/attraction/find');

describe('discovery.v2.attraction.find', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures/discovery/v2'
  });

  describe('success', function() {
    it('should find a attraction', function(done) {
      nockBack('attraction/find-200.json', {}, function(nockDone) {
        var find = Find('mock-api-key');
        find('K8vZ917Kew0')
        .then((function(_this) {
          return function(result) {
            result.name.should.equal("Susquehanna Breakdown Music Festival");
            nockDone();
            done();
          };
        })(this))
      });
    });
  });
});
