import v2 from '../../../lib/discovery/v2';

const api = v2();

describe('discovery.v2', () => {
  it('should provide attraction', (done) => {
    api.should.have.property('attraction');
    done();
  });

  it('should provide classification', (done) => {
    api.should.have.property('classification');
    done();
  });

  it('should provide event', (done) => {
    api.should.have.property('event');
    done();
  });

  it('should provide venue', (done) => {
    api.should.have.property('venue');
    done();
  });
});
