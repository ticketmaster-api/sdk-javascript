var chai      = require("chai");
var should    = chai.should();
var commerce  = require('../../lib/commerce');

describe('commerce', function() {
  it('should provide v2', function(done) {
    commerce().should.have.property('v2');
    done();
  });
});
