var chai = require("chai");
var should = chai.should();
var nock = require('nock');
var nockBack = nock.back;
var Classification = require('../../../../lib/discovery/v2/classification');

describe('discovery.v2.classification.find', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures/discovery/v2'
  });

  describe('success', function() {
    it('should find a classification', function(done) {
      nockBack('classification/find-200.json', {}, function(nockDone) {
        Classification('mock-api-key').find('KZFzniwnSyZfZ7v7na')
          .then(function(result) {
            result.segment.name.should.equal("Arts & Theatre");
            nockDone();
            done();
          })
      });
    });
  });
});
