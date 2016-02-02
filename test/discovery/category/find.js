var chai      = require("chai");
var should    = chai.should();
var nock      = require('nock');
var nockBack  = nock.back;
var Find       = require('../../../lib/discovery/category/find');

describe('Category.find', function() {
  before(function() {
    nockBack.fixtures = './test/fixtures'
  });

  describe('success', function() {
    it('should find a category', function(done) {
      nockBack('get_category.json', {}, function(nockDone) {
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
