import {back as nockBack} from 'nock';

import sdk from '../../../../lib';
import Event from '../../../../lib/discovery/v2/event';

const api = sdk('mock-api-key');

const onResult = (done, nockDone) => (result) => {
  result.items[0].name.should.equal('OSEA Membership Registration');
  nockDone();
  done();
}

describe('discovery.v2.event.all', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v2';
  });

  describe('success', () => {
    it('should find an event using the fluent API', (done) => {
      nockBack('event/all-200.json', {}, (nockDone) => {
        api.discovery.v2.event.all().then(onResult(done, nockDone))
      });
    });

    it('should find an event', (done) => {
      nockBack('event/all-200.json', {}, (nockDone) => {
        Event('mock-api-key').all().then(onResult(done, nockDone))
      });
    });
  });
});
