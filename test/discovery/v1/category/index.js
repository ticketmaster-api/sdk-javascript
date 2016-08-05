import {Category} from '../../../../lib/discovery/v1';

describe('discovery.v1.category', () => {
  it('should provide find', done => {
    Category().should.have.property('find');
    done();
  });
});
