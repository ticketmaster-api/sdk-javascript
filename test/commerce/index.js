import commerce from '../../lib/commerce';

describe('commerce', () => {
  it('should provide v2', done => {
    commerce().should.have.property('v2');
    done();
  });
});
