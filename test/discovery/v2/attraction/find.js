import chai from "chai";
const should    = chai.should();
import nock from 'nock';
const nockBack  = nock.back;

import Attraction from '../../../../lib/discovery/v2/attraction';

describe('discovery.v2.attraction.find', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v2'
  });

  describe('success', () => {
    it('should find a attraction', done => {
      nockBack('attraction/find-200.json', {}, function(nockDone) {
        Attraction('mock-api-key').find('K8vZ917Kew0')
          .then(((_this => result => {
          result.name.should.equal("Susquehanna Breakdown Music Festival");
          nockDone();
          done();
        }))(this))
      });
    });
  });
});
