var chai   = require("chai");
var should = chai.should();
var venue = require('../../../../lib/discovery/v2/venue');

describe('discovery.v2.venue', function() {
  it('should provide find', function(done) {
    venue().should.have.property('find');
    done();
  });
});
