// s

// var chai      = require("chai");
// var should    = chai.should();
// var nock      = require('nock');
// var nockBack  = nock.back;
// var discovery = require('../lib/discovery');

// describe('discovery', function() {
//   before(function() {
//     nockBack.fixtures = './test/fixtures/discovery/v1'
//     nockBack.setMode('record')
//     nock.recorder.rec();
//   });

//   describe('event', function() {
//     describe('find', function() {
//       it('should find an event', function(done) {
//         nockBack('get_event.json', {}, function(nockDone) {
//           discovery('mock-api-key').event.find('3A004F38C8275108')
//           .then((function(_this) {
//             return function(result) {
//               result.name.should.equal("Monster Jam");
//               nockDone();
//               done();
//             };
//           })(this))
//         });
//       });

//       it('should handle 404', function(done) {
//         nockBack('fail_get_event.json', {}, function(nockDone) {
//           discovery('mock-api-key').event.find('unknown-id')
//           .catch((function(_this) {
//             return function(response) {
//               response.errors[0].code.should.equal('DIS1004');
//               nockDone();
//               done();
//             };
//           })(this))
//         });
//       });
//     });
//   });
// });
