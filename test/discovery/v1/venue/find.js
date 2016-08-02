import {back as nockBack} from 'nock';

import Venue from '../../../../lib/discovery/v1/venue';

describe('discovery.v1.venue.find', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v1';
  });

  describe('success', () => {
    it('should find a venue', done => {
      nockBack('venue/find-200.json', {}, function(nockDone) {
        Venue('mock-api-key').find('475247')
          .then((result) => {
            result.name.should.equal('Alamodome');
            nockDone();
            done();
          })
          .catch(() => done());
      });
    });
  });
});
