import {back as nockBack} from 'nock';

import Event from '../../../../lib/discovery/v2/event';

describe('discovery.v2.event.all', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v2';
  });

  describe('success', () => {
    it('should find an event', done => {
      nockBack('event/all-200.json', {}, nockDone => {
        Event('mock-api-key').all()
          .then(events => {
            events.items[0].name.should.equal('OSEA Membership Registration');
            nockDone();
            done();
          });
      });
    });
  });
});
