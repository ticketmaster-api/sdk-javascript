import {back as nockBack} from 'nock';

import sdk from '../../../../lib';
import Event from '../../../../lib/discovery/v2/event';

const api = sdk('mock-api-key');

const onResult = (done) => (page) => {
  page.items[0].name.should.equal('OSEA Membership Registration');
  done();
};

nockBack.fixtures = './test/fixtures/discovery/v2';

describe('discovery.v2.event.all', () => {
  describe('success', () => {
    it('should find an event using the fluent API', (done) => {
      nockBack('event/all-200.json', {}, (nockDone) => {
        nockDone();

        api.discovery.v2.event.all()
          .then(onResult(done))
          .catch((err) => done(err));
      });
    });

    it('should find an event', (done) => {
      nockBack('event/all-200.json', {}, (nockDone) => {
        nockDone();

        Event('mock-api-key').all()
          .then(onResult(done))
          .catch((err) => done(err));
      });
    });
  });
});
