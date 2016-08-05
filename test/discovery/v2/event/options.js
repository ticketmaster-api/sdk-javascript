import {back as nockBack} from 'nock';

import Event from '../../../../lib/discovery/v2/event';

nockBack.fixtures = './test/fixtures/discovery/v2';

describe('discovery.v2.event.options', () => {
  describe('options', () => {
    it('works', (done) => {
      nockBack('event/all-200-options.json', (nockDone) => {
        nockDone();

        Event('mock-api-key').all({page: 2, size: 5, sort: 'name,desc'})
          .then((page) => {
            page.items.length.should.equal(5);
            page.isLast().should.equal(false);
            page.getAt(1).should.be.instanceOf(Promise);
            page.getNext(1).should.be.instanceOf(Promise);
            page.getPrev(1).should.be.instanceOf(Promise);

            done();
          })
          .catch((err) => done(err));
      });
    });
  });
});
