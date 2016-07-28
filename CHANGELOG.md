# Overview

This document lists the breaking changes, new features, and resolved issues which accompany each version bump.

## [2016-07-28] 1.0.0

### Major Changes (Backwards Incompatible)

* Calls to API V2 endpoints now return a new `Result` Object, which provides support for pagination, as well as metadata (counts, helpers, etc).  The data returned in that page previously in `result[0]` is now available within `result.items[0]`, for example.

### New Features

* SDK is no longer exclusively for NodeJS, and supports vanilla JavaScript for use in client-side applications as well.  This means you can use this project in your client-side Ticketmaster API consumer as well, i.e. React/Angular/EmberJS apps.

## [2016-07-19] 0.5.0

### Resolved Issues

* Added 'withCredentials: false' flag for CORS on client version of JS SDK

## [2016-06-30] 0.4.0

### New Features

* Added Commerce API V2 Offer functionality
* Added support for Discovery API v2 Classifications
* Added support for Discovery API v2 Search Attractions
* Added extra tests around module API

## [2016-06-23] 0.3.0

### New Features

* Added event search filtering via query string params in API V1 + V2 event.all() calls

## [2016-05-21] 0.2.0

### New Features

* Added support for Discovery API v2
* Added Travis CI badge to README.md
* Fixed namespacing if you want to instantiate a subset of the API
* Added specs
* Initial version
