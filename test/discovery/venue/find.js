var chai      = require("chai");
var should    = chai.should();
var nock      = require('nock');
var nockBack  = nock.back;
var Find       = require('../../../lib/discovery/venue/find');

describe('Venue.find', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures'
  });

  describe('success', function() {
    it('should find a venue', function(done) {
      nockBack('get_venue.json', {}, function(nockDone) {
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
