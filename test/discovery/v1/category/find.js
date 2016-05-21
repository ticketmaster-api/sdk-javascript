var chai      = require("chai");
var should    = chai.should();
var nock      = require('nock');
var nockBack  = nock.back;
var Find       = require('../../../../lib/discovery/v1/category/find');

describe('discovery.v1.category.find', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures/discovery/v1'
  });

  describe('success', function() {
    it('should find a category', function(done) {
      nockBack('category/find-200.json', {}, function(nockDone) {
        var find = Find('mock-api-key');
        find('10004')
        .then((function(_this) {
          return function(result) {
            result.name.should.equal("Sports");
            nockDone();
            done();
          };
        })(this))
      });
    });
  });
});
