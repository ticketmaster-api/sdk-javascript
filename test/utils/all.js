import all from '../../lib/utils/all'

let query

describe('utils.all', () => {
  before(() => {
    all.__Rewire__('getData', (params) => params)

    query = all('discovery/v2', 'a3b2c1d4e5f6', 'events')
  })

  it('should parse params correctly', (done) => {
    query({city: 'london'}).should.deep.equal({
      path: ['discovery/v2', 'events'],
      qs:   {city: 'london', apikey: 'a3b2c1d4e5f6'}
    })
    done()
  })

  after(() => {
    all.__ResetDependency__('getData')
  })
})
