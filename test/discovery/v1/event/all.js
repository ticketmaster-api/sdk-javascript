import {back as nockBack} from 'nock';

import Event from '../../../../lib/discovery/v1/event';

describe('discovery.v1.event.all', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v1';
  });

  describe('success', () => {
    it('should find an event', done => {
      nockBack('event/all-200.json', {}, nockDone => {
        Event('mock-api-key').all()
          .then((result) => {
            result.items[0].name.should.equal('OSEA Membership Registration');
            nockDone();
            done();
          })
          .catch(() => done());
      });
    });
  });
});
