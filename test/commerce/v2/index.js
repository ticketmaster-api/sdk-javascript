import v2 from '../../../lib/commerce/v2';

describe('commerce.v2', () => {
  it('should provide offer', done => {
    v2().should.have.property('offer');
    done();
  });
});
