var chai      = require("chai");
var should    = chai.should();
var nock      = require('nock');
var nockBack  = nock.back;
var Find      = require('../../../lib/discovery/event/find');

describe('Event.find', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures'
  });

  describe('success', function() {
    it('should find an event', function(done) {
      nockBack('get_event.json', {}, function(nockDone) {
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
      nockBack('fail_get_event.json', {}, function(nockDone) {
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
