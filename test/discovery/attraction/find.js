var chai      = require("chai");
var should    = chai.should();
var nock      = require('nock');
var nockBack  = nock.back;
var Find      = require('../../../lib/discovery/attraction/find');

describe('Attraction.find', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures'
  });

  describe('success', function() {
    it('should find a attraction', function(done) {
      nockBack('get_attraction.json', {}, function(nockDone) {
        var find = Find('mock-api-key');
        find('1542376')
        .then((function(_this) {
          return function(result) {
            result.name.should.equal("Monster Jam");
            nockDone();
            done();
          };
        })(this))
      });
    });
  });
});
