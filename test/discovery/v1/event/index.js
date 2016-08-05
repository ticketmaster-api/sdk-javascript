import event from '../../../../lib/discovery/v1/event';

describe('discovery.v1.event', () => {
  it('should provide find', done => {
    event().should.have.property('find');
    done();
  });

  it('should provide all', done => {
    event().should.have.property('all');
    done();
  });
});
