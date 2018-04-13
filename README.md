# GoByte Message Verification and Signing for Bitcore-GoByte


[![NPM Package](https://img.shields.io/npm/v/bitcore-message-gobyte.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-message-gobyte)
[![Build Status](https://img.shields.io/travis/gobytecoin/bitcore-message-gobyte.svg?branch=master&style=flat-square)](https://travis-ci.org/gobytecoin/bitcore-message-gobyte)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/bitcore-message-gobyte.svg?style=flat-square)](https://coveralls.io/r/gobytecoin/bitcore-message-gobyte?branch=master)

bitcore-message-gobyte adds support for verifying and signing gobyte messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bitcore-gobyte repo](https://github.com/gobytecoin/bitcore-gobyte) for more information.

## Getting Started

```sh
npm install bitcore-message-gobyte
```

```sh
bower install bitcore-message-gobyte
```

To sign a message:

```javascript
var bitcore = require('bitcore-lib-gobyte');
var Message = require('bitcore-message-gobyte');

var privateKey = bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/gobytecoin/bitcore-gobyte/blob/master/CONTRIBUTING.md) on the main bitcore-gobyte repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

