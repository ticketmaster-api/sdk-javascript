import {back as nockBack} from 'nock';

import Offer from '../../../../lib/commerce/v2/offer';

describe('commerce.v2.offer.find', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/commerce/v2';
  });

  describe('success', () => {
    it('should find offers', (done) => {
      nockBack('offer/find-200.json', {}, (nockDone) => {
        Offer('mock-api-key').find('vvG1iZKU5jIxKX', 'offers')
          .then((result) => {
            result.limits.max.should.equal(14);
            nockDone();
            done();
          });
      });
    });
  });

  describe('not found', () => {
    it('should handle 500', (done) => {
      nockBack('offer/find-500.json', {}, (nockDone) => {
        Offer('mock-api-key').find('unknown-id', 'offers')
          .catch((response) => {
            response.errors[0].code.should.equal('40001');
            nockDone();
            done();
          });
      });
    });
  });
});
