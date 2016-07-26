var chai   = require("chai");
var should = chai.should();
var event = require('../../../../lib/commerce/v2/offer');

describe('commerce.v2.offer', function() {
  it('should provide find', function(done) {
    event().should.have.property('find');
    done();
  });
});
