import discovery from '../../lib/discovery';

describe('discovery', () => {
  it('should provide v1', done => {
    discovery().should.have.property('v1');
    done();
  });
});

describe('discovery', () => {
  it('should provide v2', done => {
    discovery().should.have.property('v2');
    done();
  });
});
