import {back as nockBack} from 'nock';

import Event from '../../../../lib/discovery/v2/event';

describe('discovery.v2.event.find', () => {
  before(() => {
    nockBack.fixtures = './test/fixtures/discovery/v2';
  });

  describe('success', () => {
    it('should find an event', (done) => {
      nockBack('event/find-200.json', {}, (nockDone) => {
        Event('mock-api-key').find('vv17FZfdGkSrrMju')
          .then((result) => {
            result.name.should.equal('Susquehanna Breakdown RV Pass');
            nockDone();
            done();
          })
          .catch((err) => done(err));
      });
    });

    it('should find images for an event', (done) => {
      nockBack('event/findImages-200.json', {}, (nockDone) => {
        Event('mock-api-key').findImages('vv17FZfdGkSrrMju')
          .then((result) => {
            result.images[0].should.deep.equal({
              'ratio': '3_2',
              'url': 'http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_ARTIST_PAGE_3_2.jpg',
              'width': 305,
              'height': 203,
              'fallback': true
            });
            nockDone();
            done();
          })
          .catch((err) => done(err));
      });
    });
  });

  describe('not found', () => {
    it('should handle 404', (done) => {
      nockBack('event/find-404.json', {}, (nockDone) => {
        Event('mock-api-key').find('unknown-id')
          .catch((response) => {
            response.errors[0].code.should.equal('DIS1004');
            nockDone();
            done();
          })
          .catch((err) => done(err));
      });
    });
  });
});
