import all from '../../lib/utils/all';

describe('utils.all', () => {
  before(() => {
    all.__Rewire__('getData', (params) => params);
  });

  it('should parse params correctly', (done) => {
    const query = all('discovery/v2', 'a3b2c1d4e5f6', 'events');

    query({city: 'london'}).should.deep.equal({
      path: ['discovery/v2', 'events'],
      qs:   {city: 'london', apikey: 'a3b2c1d4e5f6'}
    });

    done();
  });

  after(() => {
    all.__ResetDependency__('getData');
  });
});
