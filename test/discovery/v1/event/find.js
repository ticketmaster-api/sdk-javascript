var chai      = require("chai");
var should    = chai.should();
var nock      = require('nock');
var nockBack  = nock.back;
var Find      = require('../../../../lib/discovery/v1/event/find');

describe('discovery.v1.event.find', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures/discovery/v1'
  });

  describe('success', function() {
    it('should find an event', function(done) {
      nockBack('event/find-200.json', {}, function(nockDone) {
        var find = Find('mock-api-key');
        find('3A004F38C8275108')
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

  describe('not found', function() {
    it('should handle 404', function(done) {
      nockBack('event/find-404.json', {}, function(nockDone) {
        var find = Find('mock-api-key');
        find('unknown-id')
        .catch((function(_this) {
          return function(response) {
            response.errors[0].code.should.equal('DIS1004');
            nockDone();
            done();
          };
        })(this))
      });
    });
  });
});
