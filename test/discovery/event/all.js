var chai      = require("chai");
var should    = chai.should();
var nock      = require('nock');
var nockBack  = nock.back;
var All       = require('../../../lib/discovery/event/all');

describe('Event.all', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures'
  });

  describe('success', function() {
    it('should find an event', function(done) {
      nockBack('get_events.json', {}, function(nockDone) {
        var all = All('mock-api-key');
        all()
        .then(function(events) {
          events[0].name.should.equal("OSEA Membership Registration");
          nockDone();
          done();
        })
      });
    });
  });
});
