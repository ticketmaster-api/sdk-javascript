import {Venue} from '../../../../lib/discovery/v1'

describe('discovery.v1.venue', () => {
  it('should provide find', (done) => {
    Venue().should.have.property('find')
    done()
  })
})
