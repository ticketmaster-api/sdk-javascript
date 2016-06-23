var chai   = require("chai");
var should = chai.should();
var attraction = require('../../../../lib/discovery/v2/attraction');

describe('discovery.v2.attraction', function() {
  it('should provide all', function(done) {
    attraction().should.have.property('all');
    done();
  });

  it('should provide find', function(done) {
    attraction().should.have.property('find');
    done();
  });
});
