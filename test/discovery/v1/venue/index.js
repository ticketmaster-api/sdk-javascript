import venue from '../../../../lib/discovery/v1/venue';

describe('discovery.v1.venue', () => {
  it('should provide find', (done) => {
    venue().should.have.property('find');
    done();
  });
});
