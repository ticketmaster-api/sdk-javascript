var chai   = require("chai");
var should = chai.should();
var category = require('../../../../lib/discovery/v1/category');

describe('discovery.v1.category', function() {
  it('should provide find', function(done) {
    category().should.have.property('find');
    done();
  });
});
