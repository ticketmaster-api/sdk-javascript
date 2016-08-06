# **[Ticketmaster](https://www.npmjs.com/package/ticketmaster)** [![Build Status](https://travis-ci.org/ticketmaster-api/sdk-javascript.svg?branch=master)](https://travis-ci.org/ticketmaster-api/sdk-javascript)


Javascript SDK for the **[Ticketmaster Open Platform](http://developer.ticketmaster.com/)**.

Aims to wrap the Ticketmaster API with coverage for all Open Platform endpoints, featuring:
 - API key authentication support
 - Ticketmaster OAuth2 access key support

## System Requirements

 - [NodeJS](https://nodejs.org) (v0.12 or greater)

## Installation:

```bash
npm install --save ticketmaster
```

## Client:

For use in the browser-based client-side JS applications, a **dist/** folder exists for each release.  Releases can be found @ [https://github.com/ticketmaster-api/sdk-javascript/releases](https://github.com/ticketmaster-api/sdk-javascript/releases).

```bash
git clone --branch <version> git@github.com:ticketmaster-api/sdk-javascript.git
```

For browser usage there are two files in **dist/** folder
```bash
./dist/tmapi-[version].js     (raw with source-maps)
./dist/tmapi-[version].min.js (minified)
```

Include one of them in to your project:
```html
...
<script src="dist/tmapi-[version].js"></script>
<script src="dist/tmapi-[version].min.js"></script>
...
```

Use global variable **tmapi** to make an API call:

```javascript
tmapi('YOUR_API_KEY').discovery.v2.event.all()
  .then(function(page) {
    // "page" is an object of Ticketmaster events information
  });
```

**Note** If you need to support browsers lacking native support for Promises you should supply a polyfill

## Server:

Require the package and make an API call:

ES5
```javascript
var tmapi = require('tmapi');

tmapi('YOUR_API_KEY').discovery.v2.event.all()
  .then(function(result) {
    // see notes on the Result object below
  });
```

ES6
```javascript
import tmapi from 'tmapi';

tmapi('YOUR_API_KEY').discovery.v2.event.all()
  .then((result) => {}) // see notes on the Result object below
```

Modules are also available individually:

```javascript
import {Event} from 'tmapi/discovery/v2'

Event('YOUR_API_KEY').all()
  .then((result) => console.log(result.items))
```

## Rebuild source:

In case you want to build your own bundle for client

1. Clone this repository

    ```bash
    git clone git@github.com:ticketmaster-api/sdk-javascript.git
    ```

1. install dependencies

    ```bash
    npm install
    ```

1. Run npm script:

    ```bash
    npm run build
    ```


## Error handling:

**Be aware:** no **.catch()** method provided! You should write it by your own.


## Result object API:

(provided only for sets which are result of **.all()** type methods)

properties:

- `result.items` - Array of Ticketmaster event information.
- `result.page` - Additional general information object.

methods:

- `result.getAt(index): Promise`
  - Returns a Promise yielding a new Result object.

- `result.getNext([step]): Promise`
  - Returns a Promise yielding a new Result object.
  - Can take additional `step` param (1 by default).

- `result.getPrev([step]): Promise`
  - Returns a Promise yielding a new Result object.
  - Can take additional `step` param (1 by default).

- `result.count(): Integer`
  - Returns the total count of items matching your criteria

- `result.pages(): Integer`
  - Returns the total count of pages matching your criteria

- `result.isFirst(): Boolean`
  - Whether the current Result is the first page

- `result.isLast(): Boolean`
  - Whether the current Result is the last page

## Running Tests

 ```bash
 npm test
 ```

## Status

Currently supports the following endpoints:

### Discovery API
- v1
  - Attraction
    - all
    - find
  - Category
    - all
    - find
  - Event
    - all
    - find
    - findImages
  - Venue
    - all
    - find
- v2
  - Attraction
    - all
    - find
  - Classification
    - all
    - find
  - Event
    - all
    - find
    - findImages
  - Venue
    - all {page, size, sort}
    - find

Our goal is to implement [all available endpoints](http://developer.ticketmaster.com/).
Pull Requests are gladly accepted!

## Contact Us

[internal only] Find us in #open-platform on Ticketmaster Slack!
