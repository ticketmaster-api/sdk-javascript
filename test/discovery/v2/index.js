var chai   = require("chai");
var should = chai.should();
var v2     = require('../../../lib/discovery/v2');

describe('discovery.v2', function() {
  it('should provide attraction', function(done) {
    v2().should.have.property('attraction');
    done();
  });

  it('should provide event', function(done) {
    v2().should.have.property('event');
    done();
  });

  it('should provide venue', function(done) {
    v2().should.have.property('venue');
    done();
  });
});
