import event from '../../../../lib/discovery/v2/event';

describe('discovery.v2.event', () => {
  it('should provide all', done => {
    event().should.have.property('all');
    done();
  });

  it('should provide find', done => {
    event().should.have.property('find');
    done();
  });
});
