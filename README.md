# Alarmx Message Verification and Signing for Bitcore-Alarmx


[![NPM Package](https://img.shields.io/npm/v/bitcore-message-alarmx.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-message-alarmx)
[![Build Status](https://img.shields.io/travis/alarmxcore/bitcore-message-alarmx.svg?branch=master&style=flat-square)](https://travis-ci.org/alarmxcore/bitcore-message-alarmx)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/bitcore-message-alarmx.svg?style=flat-square)](https://coveralls.io/r/alarmxcore/bitcore-message-alarmx?branch=master)

bitcore-message-alarmx adds support for verifying and signing alarmx messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bitcore-alarmx repo](https://github.com/alarmxcore/bitcore-alarmx) for more information.

## Getting Started

```sh
npm install bitcore-message-alarmx
```

```sh
bower install bitcore-message-alarmx
```

To sign a message:

```javascript
var bitcore = require('bitcore-lib-alarmx');
var Message = require('bitcore-message-alarmx');

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

See [CONTRIBUTING.md](https://github.com/alarmxcore/bitcore-alarmx/blob/master/CONTRIBUTING.md) on the main bitcore-alarmx repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

