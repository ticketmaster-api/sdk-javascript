import {back as nockBack} from 'nock';

import Attraction from '../../../../lib/discovery/v2/attraction';

describe('discovery.v2.attraction.all', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v2';
  });

  describe('success', () => {
    it('should find an attraction', (done) => {
      nockBack('attraction/all-200.json', {}, nockDone => {
        Attraction('mock-api-key').all()
          .then((result) => {
            result.items[0].name.should.equal('!!!');
            nockDone();
            done();
          })
          .catch(() => done());
      });
    });
  });
});
