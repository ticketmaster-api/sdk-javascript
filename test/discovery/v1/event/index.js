var chai   = require("chai");
var should = chai.should();
var event = require('../../../../lib/discovery/v1/event');

describe('discovery.v1.event', function() {
  it('should provide find', function(done) {
    event().should.have.property('find');
    done();
  });

  it('should provide all', function(done) {
    event().should.have.property('all');
    done();
  });
});
