var chai = require('chai');
var should = chai.should();
var nock = require('nock');
var nockBack = nock.back;
var Find = require('../../../../lib/discovery/v1/attraction/find');

describe('discovery.v1.attraction.find', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures/discovery/v1';
  });

  describe('success', function() {
    it('should find a attraction', function(done) {
      nockBack('attraction/find-200.json', {}, function(nockDone) {
        var find = Find('mock-api-key');
        find('1542376')
        .then((function(_this) {
          return function(result) {
            result.name.should.equal('Monster Jam');
            nockDone();
            done();
          };
        })(this));
      });
    });
  });
});
