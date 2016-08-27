# **[Ticketmaster](https://www.npmjs.com/package/ticketmaster)** [![Build Status](https://travis-ci.org/ticketmaster-api/sdk-javascript.svg?branch=master)](https://travis-ci.org/ticketmaster-api/sdk-javascript)


Javascript SDK for the **[Ticketmaster Open Platform](http://developer.ticketmaster.com/)**.

Aims to wrap the Ticketmaster API with coverage for all Open Platform endpoints, featuring:
 - API key authentication support
 - Ticketmaster OAuth2 access key support

Currently supports the following endpoints:

#### Discovery API
- v2
  - [Attractions](http://developer.ticketmaster.com/products-and-docs/apis/discovery/v2/#search-attractions-v2)
    - [`all`](http://developer.ticketmaster.com/products-and-docs/apis/discovery/v2/#query-parameters-3)
    - `find`
  - [Classifications](http://developer.ticketmaster.com/products-and-docs/apis/discovery/v2/#search-classifications-v2)
    - [`all`](http://developer.ticketmaster.com/products-and-docs/apis/discovery/v2/#query-parameters-5)
    - `find`
  - [Events](http://developer.ticketmaster.com/products-and-docs/apis/discovery/v2/#srch-events-v2)
    - [`all`](http://developer.ticketmaster.com/products-and-docs/apis/discovery/v2/#query-parameters)
    - `find`
    - `findImages`
  - [Venues](http://developer.ticketmaster.com/products-and-docs/apis/discovery/v2/#search-venues-v2)
    - [`all`](http://developer.ticketmaster.com/products-and-docs/apis/discovery/v2/#query-parameters-7)
    - `find`
- v1 (deprecated, same methods as above)
  - Attractions
  - Categories (renamed to Classifications in v2)
  - Events
  - Venues

Our goal is to implement [all available endpoints](http://developer.ticketmaster.com/).
Pull Requests are gladly accepted!

## System Requirements

 - [NodeJS](https://nodejs.org) (v0.12 or greater)

## Installation:

```bash
npm install --save ticketmaster
```

# Usage

## Client:

For use in client-side JS applications, a `dist/web` folder exists for each release.  Releases can be found @ [https://github.com/ticketmaster-api/sdk-javascript/releases](https://github.com/ticketmaster-api/sdk-javascript/releases).

```bash
git clone --branch <version> git@github.com:ticketmaster-api/sdk-javascript.git
```

For browser usage there are two files in `dist/web`:
```bash
./dist/web/ticketmaster-[version].js     # raw with source-maps
./dist/web/ticketmaster-[version].min.js # minified
```

Include one of them in to your project:
```html
...
<script src="dist/web/ticketmaster-[version].js"></script>
<script src="dist/web/ticketmaster-[version].min.js"></script>
...
```

Use global variable **ticketmaster** to make an API call:

```javascript
ticketmaster('YOUR_API_KEY').discovery.v2.event.all()
  .then(function(result) {
    console.log(result.items) // See notes on the Result object below
  })
  .catch(function(err) {
    console.log(err)          // NOTE: you must provide your own error handler
  })
```

**Note** If you need to support browsers lacking native support for Promises you should supply a 
polyfill such as [es6-promise](https://www.npmjs.com/package/es6-promise)

## Server:

Require the package and make an API call:

ES5
```javascript
var ticketmaster = require('ticketmaster');

ticketmaster('YOUR_API_KEY').discovery.v2.event.all()
  .then(function(result) {
    console.log(result.items) // See notes on the Result object below
  })
  .catch(function(err) {
    console.log(err)          // NOTE: you must provide your own error handler
  })
```

ES6
```javascript
import ticketmaster from 'ticketmaster';

ticketmaster('YOUR_API_KEY').discovery.v2.event.all()
  .then((result) => {
    console.log(result.items)        // See notes on the Result object below
  })
  .catch((err) => console.log(err))  // NOTE: you must provide your own error handler
```

Modules are also available individually:

ES5
```javascript
var Event = require('ticketmaster/discovery/v2').Event

Event('YOUR_API_KEY').all()
  .then(function(result) {
    console.log(result.items) // See notes on the Result object below
  })
  .catch(function(err) {
    console.log(err)          // NOTE: you must provide your own error handler
  })
```

ES6
```javascript
import {Event} from 'ticketmaster/discovery/v2'

Event('YOUR_API_KEY').all()
  .then((result) => console.log(result.items)) // See notes on the Result object below
  .catch((err) => console.log(err))            // NOTE: you must provide your own error handler
```


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


## Error handling:

**NOTE:** no `.catch()` method is provided! You **must** supply your own.

# Contributing

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

## Running Tests

 ```bash
 npm test
 ```

## Contact Us

[internal only] Find us in #open-platform on Ticketmaster Slack!
