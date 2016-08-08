import v1 from '../../../lib/discovery/v1';

describe('discovery.v1', () => {
  it('should provide attraction', done => {
    v1().should.have.property('attraction');
    done();
  });

  it('should provide category', done => {
    v1().should.have.property('category');
    done();
  });

  it('should provide event', done => {
    v1().should.have.property('event');
    done();
  });

  it('should provide venue', done => {
    v1().should.have.property('venue');
    done();
  });
});
