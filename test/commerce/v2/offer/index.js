import {Offer} from '../../../../lib/commerce/v2'

describe('commerce.v2.offer', () => {
  it('should provide find', (done) => {
    Offer().should.have.property('find')
    done()
  })
})
