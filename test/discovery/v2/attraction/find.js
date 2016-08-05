import {back as nockBack} from 'nock';

import Attraction from '../../../../lib/discovery/v2/attraction';

describe('discovery.v2.attraction.find', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v2';
  });

  describe('success', () => {
    it('should find a attraction', (done) => {
      nockBack('attraction/find-200.json', {}, (nockDone) => {
        Attraction('mock-api-key').find('K8vZ917Kew0')
          .then((result) => {
            result.name.should.equal('Susquehanna Breakdown Music Festival');
            nockDone();
            done();
          })
          .catch(() => done());
      });
    });
  });
});
