var chai      = require("chai");
var should    = chai.should();
var nock      = require('nock');
var nockBack  = nock.back;
var Find       = require('../../../../lib/discovery/v1/venue/find');

describe('discovery.v1.venue.find', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures/discovery/v1'
  });

  describe('success', function() {
    it('should find a venue', function(done) {
      nockBack('venue/find-200.json', {}, function(nockDone) {
        var find = Find('mock-api-key');
        find('475247')
        .then((function(_this) {
          return function(result) {
            result.name.should.equal("Alamodome");
            nockDone();
            done();
          };
        })(this))
      });
    });
  });
});
