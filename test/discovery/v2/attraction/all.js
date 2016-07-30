import chai from "chai";
const should    = chai.should();
import nock from 'nock';
const nockBack  = nock.back;

import Attraction from '../../../../lib/discovery/v2/attraction';

describe('discovery.v2.attraction.all', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v2'
  });

  describe('success', () => {
    it('should find an attraction', (done) => {
      nockBack('attraction/all-200.json', {}, nockDone => {
        Attraction('mock-api-key').all()
          .then((attractions) => {
            attractions.items[0].name.should.equal("!!!");
            nockDone();
            done();
          })
      });
    });
  });
});
