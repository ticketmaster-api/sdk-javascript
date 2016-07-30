import event from '../../../../lib/commerce/v2/offer';

describe('commerce.v2.offer', () => {
  it('should provide find', (done) => {
    event().should.have.property('find');
    done();
  });
});
