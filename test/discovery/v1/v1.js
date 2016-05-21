var chai   = require("chai");
var should = chai.should();
var v1     = require('../../../lib/discovery/v1');

describe('discovery.v1', function() {
  it('should provide attraction', function(done) {
    v1().should.have.property('attraction');
    done();
  });

  it('should provide category', function(done) {
    v1().should.have.property('category');
    done();
  });

  it('should provide event', function(done) {
    v1().should.have.property('event');
    done();
  });

  it('should provide venue', function(done) {
    v1().should.have.property('venue');
    done();
  });
});
