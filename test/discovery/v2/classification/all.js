import {back as nockBack} from 'nock';

import Classification from '../../../../lib/discovery/v2/classification';

describe('discovery.v2.classification.all', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v2';
  });

  describe('success', () => {
    it('should find an classification', (done) => {
      nockBack('classification/all-200.json', {}, (nockDone) => {
        Classification('mock-api-key').all()
          .then((result) => {
            result.items[0].should.not.be.an('undefined');
            nockDone();
            done();
          })
          .catch((err) => done(err));
      });
    });
  });
});
