import venue from '../../../../lib/discovery/v2/venue';

describe('discovery.v2.venue', () => {
  it('should provide find', (done) => {
    venue().should.have.property('find');
    done();
  });
});
