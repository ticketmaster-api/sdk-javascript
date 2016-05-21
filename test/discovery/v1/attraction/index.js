var chai   = require("chai");
var should = chai.should();
var attraction = require('../../../../lib/discovery/v1/attraction');

describe('discovery.v1.attraction', function() {
  it('should provide find', function(done) {
    attraction().should.have.property('find');
    done();
  });
});
