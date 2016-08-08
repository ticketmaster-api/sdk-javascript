import {Event} from '../../../../lib/discovery/v1';

describe('discovery.v1.event', () => {
  it('should provide find', done => {
    Event().should.have.property('find');
    done();
  });

  it('should provide all', done => {
    Event().should.have.property('all');
    done();
  });
});
