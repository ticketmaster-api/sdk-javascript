import attraction from '../../../../lib/discovery/v1/attraction';

describe('discovery.v1.attraction', () => {
  it('should provide find', done => {
    attraction().should.have.property('find');
    done();
  });
});
