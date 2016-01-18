# ticketmaster-node

Node SDK for the Ticketmaster Open Platform

***WARNING: Extremely alpha proof-of-concept***

Aims to wrap the Ticketmaster API with coverage for all endpoints, including these features:
 - Passes API access keys
 - Promisifies all requests via Bluebird
 - TODO: Passes OAuth2 bearer credentials

## Build Status

 - TBD, not integrated with Jenkins

## System Requirements

 - NodeJS

## Installation

 - `make install`

## Usage

While in pre-alpha, this doesn't exist in NPM, and is hosted on internal GitLab.  To experiment before public,

 - `git clone git@git.tm.tmcs:universe/ticketmaster-node.git`
 - `cd ticketmaster-node && npm link`
 - `cd <your project> && npm link ticketmaster-node && npm install ticketmaster-node --save`

Inside your project:

```javascript
var TM = require('ticketmaster-node');

TM('your-api-key').discovery.event.all()
.then(function(events) {
  console.log(events);
});
```

## Status

Currently supports the following endpoints:

 - Discovery API
   - Event
     - All
     - Find

## Slack Channel

Find us in #open-platform on Slack!

