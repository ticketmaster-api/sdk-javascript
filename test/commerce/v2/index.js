var chai   = require("chai");
var should = chai.should();
var v2     = require('../../../lib/commerce/v2');

describe('commerce.v2', function() {
  it('should provide offer', function(done) {
    v2().should.have.property('offer');
    done();
  });
});
