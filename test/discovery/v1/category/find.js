import {back as nockBack} from 'nock';

import Category from '../../../../lib/discovery/v1/category';

describe('discovery.v1.category.find', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v1';
  });

  describe('success', () => {
    it('should find a category', done => {
      nockBack('category/find-200.json', {}, nockDone => {
        Category('mock-api-key').find('10004')
          .then((result) => {
            result.name.should.equal('Sports');
            nockDone();
            done();
          })
          .catch(() => done());
      });
    });
  });
});
