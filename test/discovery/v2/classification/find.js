import {back as nockBack} from 'nock';

import Classification from '../../../../lib/discovery/v2/classification';

describe('discovery.v2.classification.find', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v2';
  });

  describe('success', () => {
    it('should find a classification', done => {
      nockBack('classification/find-200.json', {}, nockDone => {
        Classification('mock-api-key').find('KZFzniwnSyZfZ7v7na')
          .then(result => {
            result.segment.name.should.equal('Arts & Theatre');
            nockDone();
            done();
          })
          .catch((err) => done(err));
      });
    });
  });
});
