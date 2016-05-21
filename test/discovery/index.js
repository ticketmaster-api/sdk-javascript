var chai      = require("chai");
var should    = chai.should();
var discovery = require('../../lib/discovery');

describe('discovery', function() {
  it('should provide v1', function(done) {
    discovery().should.have.property('v1');
    done();
  });
});

describe('discovery', function() {
  it('should provide v2', function(done) {
    discovery().should.have.property('v2');
    done();
  });
});
