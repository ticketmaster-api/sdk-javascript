import v2 from '../../../lib/discovery/v2';

describe('discovery.v2', () => {
  it('should provide attraction', (done) => {
    v2().should.have.property('attraction');
    done();
  });

  it('should provide event', (done) => {
    v2().should.have.property('event');
    done();
  });

  it('should provide venue', (done) => {
    v2().should.have.property('venue');
    done();
  });
});
