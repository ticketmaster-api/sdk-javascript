# **[Ticketmaster](https://www.npmjs.com/package/ticketmaster)** [![Build Status](https://travis-ci.org/ticketmaster-api/sdk-javascript.svg?branch=master)](https://travis-ci.org/ticketmaster-api/sdk-javascript)


Javascript SDK for the **[Ticketmaster Open Platform](http://developer.ticketmaster.com/)**.

Aims to wrap the Ticketmaster API with coverage for all Open Platform endpoints, featuring:
 - API key authentication support
 - Ticketmaster OAuth2 access key support
 - Promises on all requests via Bluebird

## System Requirements

 - [NodeJS](https://nodejs.org) (v0.12 or greater)

## Installation:

```bash
npm install --save ticketmaster@<version>
```

NOTE: We heavily use [semantic versioning](http://semver.org/), and actively introduce breaking changes across MAJOR version changes.  To avoid any breaking changes being introduced inadvertently, you should lock this package at a specific version using the npm command above, and upgrade explicitly.

## Client:

For use in the browser-based client-side JS applications, a **dist/** folder exists for each release.  Releases can be found @ [https://github.com/ticketmaster-api/sdk-javascript/releases](https://github.com/ticketmaster-api/sdk-javascript/releases).

```bash
git clone --branch <version> git@github.com:ticketmaster-api/sdk-javascript.git
```

For browser usage there are two files in **dist/** folder
```bash
./dist/ticketmaster-[version].js (raw with source-maps)
./dist/ticketmaster-[version].min.js (minified)
```

Include one of them in to your project:
```html
...
<script src="ticketmaster-[version].js"></script>
<script src="ticketmaster-[version].min.js"></script>
...
```

Use global variable **ticketmaster** to make an API call (name can be changed in webpack settings during rebuild):

```javascript
ticketmaster('your-api-key').discovery.v2.event.all()
.then(function(result) {
  // "result" is an object of Ticketmaster events information
});
```

## Server:

Require the package and make an API call:

```javascript
var ticketmaster = require('ticketmaster');
ticketmaster('your-api-key').discovery.v2.event.all()
.then(function(result) {
  // "result" is an object of Ticketmaster events information
});
```

Alternative syntax if you are only interested in a subset of the API:

```javascript
var EventAPI = require('ticketmaster').discovery.v2.event;
EventAPI('your-api-key').all()
```

## Rebuild source:

In case you want to build your own bundle for client

`1`. Clone this repository

```bash
git clone git@github.com:ticketmaster-api/sdk-javascript.git
```
`2`. install dependencies

```bash
npm install
```
`3`. Run npm script:

- for raw (with source-maps) version of client lib use:
```bash
npm run-script dev
```
- for minified version of client lib use:
```bash
npm run-script prod
```
- or (for Windows users):
```bash
npm run-script win-prod
```


## Error handling:

**Be aware:** no **.catch()** method provided! You should write it by your own.


## Result object API:

(provided only for sets which are result of **.all()** type methods)

properties:
-`result.items` - Array of Ticketmaster event information.
-`result.page` - Additional general information object.

methods:
-`result.getPage(index)` - Promise which returns a new Result object.
-`result.nextPage()` - Promise which returns a new Result object. Can take additional param - step (1 by default).
-`result.previousPage()` - Promise which returns a new Result object. Can take additional param - step (1 by default).
-`result.records()` - returns an Array of this page's records
-`result.count()` - returns the total count of items
-`result.isLastPage()` - returns a Boolean if current Result is the last page

## Running Tests

 ```bash
 npm test
 ```

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
   - v2
     - Attraction
       - Find
     - Event
       - All
       - Find
     - Venue
       - Find

The goal is to implement all endpoints available @ http://developer.ticketmaster.com/.
Pull Requests gladly accepted!

## Deployment

Maintainers can cut a new release:

```bash
npm version <new_version>
```

This will build, tag, push to git, and push the build folder to npm.

## Contact Us

[internal only] Find us in #open-platform on Ticketmaster Slack!
