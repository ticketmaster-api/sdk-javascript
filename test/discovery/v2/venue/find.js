import {back as nockBack} from 'nock';

import Venue from '../../../../lib/discovery/v2/venue';

describe('discovery.v2.venue.find', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v2';
  });

  describe('success', () => {
    it('should find a venue', done => {
      nockBack('venue/find-200.json', {}, (nockDone) => {
        Venue('mock-api-key').find('KovZpZAEA76A')
          .then((result) => {
            result.name.should.equal('The Pavilion at Montage Mountain');
            nockDone();
            done();
          })
          .catch(() => done());
      });
    });
  });
});
