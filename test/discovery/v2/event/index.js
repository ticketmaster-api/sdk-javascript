var chai   = require("chai");
var should = chai.should();
var event = require('../../../../lib/discovery/v2/event');

describe('discovery.v2.event', function() {
  it('should provide all', function(done) {
    event().should.have.property('all');
    done();
  });

  it('should provide find', function(done) {
    event().should.have.property('find');
    done();
  });
});
