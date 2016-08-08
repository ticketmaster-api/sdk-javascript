import {Attraction} from '../../../../lib/discovery/v1';

describe('discovery.v1.attraction', () => {
  it('should provide find', done => {
    Attraction().should.have.property('find');
    done();
  });
});
