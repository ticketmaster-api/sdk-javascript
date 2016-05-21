# ticketmaster [![Build Status](https://travis-ci.org/ticketmaster-api/sdk-javascript.svg?branch=master)](https://travis-ci.org/ticketmaster-api/sdk-javascript)


Node SDK for the Ticketmaster Open Platform (http://developer.ticketmaster.com/).

Aims to wrap the Ticketmaster API with coverage for all Open Platform endpoints, featuring:
 - API key authentication support
 - Ticketmaster OAuth2 access key support
 - Promises on all requests via Bluebird

## Build Status

 - [TODO] Implement Travis CI

## System Requirements

 - NodeJS (v0.10 or greater)

## Usage


1. Include the ticketmaster npm package:

 - `npm install --save ticketmaster`

2. Require the package and make an API call:

```javascript
var TM = require('ticketmaster');
TM('your-api-key').discovery.v1.event.all()
.then(function(events) {
  // "events" is an array of Ticketmaster event information
  console.log(events);
});
```

Alternative syntax if you are only interested in a subset of the API:
```javascript
var EventAPI = require('ticketmaster').discovery.v1.event;
EventAPI('your-api-key').all()
```

## Running Tests

 - `make test`

## Status

Currently supports the following endpoints:

 - Discovery API
   - v1
     - Attraction
       - Find
     - Category
       - Find
     - Event
       - All
       - Find
     - Venue
       - Find

The goal is to implement all endpoints available @ http://developer.ticketmaster.com/.
Pull Requests gladly accepted!

## Contact Us

[internal only] Find us in #open-platform on Ticketmaster Slack!

