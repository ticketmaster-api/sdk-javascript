import find from '../../lib/utils/find'

describe('utils.find', () => {
  before(() => {
    find.__Rewire__('getData', (params) => params)
  })

  it('should parse params for a resource', (done) => {
    const query = find('discovery/v2', 'a3b2c1d4e5f6', 'events')
    query(1).should.deep.equal({
      path: ['discovery/v2', 'events', 1],
      qs:   {apikey: 'a3b2c1d4e5f6'}
    })

    done()
  })

  it('should parse params for a sub-resource', (done) => {
    const query = find('discovery/v2', 'a3b2c1d4e5f6', 'events', 'images')
    query(1).should.deep.equal({
      path: ['discovery/v2', 'events', 1, 'images'],
      qs:   {apikey: 'a3b2c1d4e5f6'}
    })

    done()
  })

  after(() => {
    find.__ResetDependency__('getData')
  })
})
