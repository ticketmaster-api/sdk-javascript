var chai      = require("chai");
var should    = chai.should();
var nock      = require('nock');
var nockBack  = nock.back;
var All       = require('../../../../lib/discovery/v2/classification/all');

describe('discovery.v2.classification.all', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures/discovery/v2'
  });

  describe('success', function() {
    it('should find an classification', function(done) {
      nockBack('classification/all-200.json', {}, function(nockDone) {
        var all = All('mock-api-key');
        all()
        .then(function(classifications) {
          classifications.items[0].should.not.be.an('undefined');
          nockDone();
          done();
        })
      });
    });
  });
});
