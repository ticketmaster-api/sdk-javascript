import {back as nockBack} from 'nock';

import Event from '../../../../lib/discovery/v1/event';

describe('discovery.v1.event.find', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v1';
  });

  describe('success', () => {
    it('should find an event', done => {
      nockBack('event/find-200.json', {}, function(nockDone) {
        Event('mock-api-key').find('3A004F38C8275108')
          .then((result) => {
            result.name.should.equal('Monster Jam');
            nockDone();
            done();
          })
          .catch(() => done());
      });
    });
  });

  describe('not found', () => {
    it('should handle 404', done => {
      nockBack('event/find-404.json', {}, function(nockDone) {
        Event('mock-api-key').find('unknown-id')
          .then((result) => {
            result.errors[0].code.should.equal('DIS1004');
            nockDone();
            done();
          })
          .catch(() => done());
      });
    });
  });
});
