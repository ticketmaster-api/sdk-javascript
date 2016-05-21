var chai   = require("chai");
var should = chai.should();
var venue = require('../../../../lib/discovery/v1/venue');

describe('discovery.v1.venue', function() {
  it('should provide find', function(done) {
    venue().should.have.property('find');
    done();
  });
});
