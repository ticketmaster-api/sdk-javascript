import category from '../../../../lib/discovery/v1/category';

describe('discovery.v1.category', () => {
  it('should provide find', done => {
    category().should.have.property('find');
    done();
  });
});
