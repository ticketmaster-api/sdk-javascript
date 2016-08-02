import {back as nockBack} from 'nock';

import Attraction from '../../../../lib/discovery/v1/attraction';

describe('discovery.v1.attraction.find', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v1';
  });

  describe('success', () => {
    it('should find a attraction', done => {
      nockBack('attraction/find-200.json', {}, function(nockDone) {
        Attraction('mock-api-key').find('1542376')
          .then((result) => {
            result.name.should.equal('Monster Jam');
            nockDone();
            done();
          })
          .catch(() => done());
      });
    });
  });
});
