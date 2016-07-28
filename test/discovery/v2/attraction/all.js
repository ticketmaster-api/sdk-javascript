var chai      = require("chai");
var should    = chai.should();
var nock      = require('nock');
var nockBack  = nock.back;
var All       = require('../../../../lib/discovery/v2/attraction/all');

describe('discovery.v2.attraction.all', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures/discovery/v2'
  });

  describe('success', function() {
    it('should find an attraction', function(done) {
      nockBack('attraction/all-200.json', {}, function(nockDone) {
        var all = All('mock-api-key');
        all()
        .then(function(attractions) {
          attractions.items[0].name.should.equal("!!!");
          nockDone();
          done();
        })
      });
    });
  });
});
