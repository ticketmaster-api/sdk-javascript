import Attraction from '../../../../lib/discovery/v2/attraction';

describe('discovery.v2.attraction', () => {
  it('should provide all', (done) => {
    Attraction().should.have.property('all');
    done();
  });

  it('should provide find', (done) => {
    Attraction().should.have.property('find');
    done();
  });
});
