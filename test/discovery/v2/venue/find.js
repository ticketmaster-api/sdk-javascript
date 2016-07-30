var chai      = require("chai");
var should    = chai.should();
var nock      = require('nock');
var nockBack  = nock.back;
var Venue     = require('../../../../lib/discovery/v2/venue');

describe('discovery.v2.venue.find', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures/discovery/v2'
  });

  describe('success', function() {
    it('should find a venue', function(done) {
      nockBack('venue/find-200.json', {}, function(nockDone) {
        Venue('mock-api-key').find('KovZpZAEA76A')
          .then(function(result) {
            result.name.should.equal("The Pavilion at Montage Mountain");
            nockDone();
            done();
          })
      });
    });
  });
});
