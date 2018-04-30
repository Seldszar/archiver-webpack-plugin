[![npm][npm]][npm-url]
[![node][node]][node-url]
[![dependencies][dependencies]][dependencies-url]
[![test][test]][test-url]
[![semantic-release][semantic-release]][semantic-release-url]

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg">
  </a>
  <h1>Archiver Plugin</h1>
  <p>Generate a compressed archive of compiled assets.<p>
</div>

## Table of Contents

[![Greenkeeper badge](https://badges.greenkeeper.io/Seldszar/archiver-webpack-plugin.svg)](https://greenkeeper.io/)

- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)
- [License](#license)

## Installation

```bash
npm install archiver-webpack-plugin --save-dev
```

## Usage

```javascript
var ArchiverPlugin = require("archiver-webpack-plugin");

module.exports = {
	plugins: [
		new ArchiverPlugin({
			format: "zip"
		})
	]
}
```

Arguments:

* `output`: The archive output path.
* `test`: All assets matching this RegExp are processed. Defaults to every asset.
* `format`: The archive format. Defaults to `"zip"`.
* `formatOptions`: The archive format options. Defaults to `"{}"`.
* `archive`: An Archiver instance. Defaults to the built-in instance.

## Author

Alexandre Breteau - [@0xSeldszar](https://twitter.com/0xSeldszar)

## License

MIT © [Alexandre Breteau](https://seldszar.fr)


[npm]: https://img.shields.io/npm/v/archiver-webpack-plugin.svg
[npm-url]: https://npmjs.com/package/archiver-webpack-plugin

[node]: https://img.shields.io/node/v/archiver-webpack-plugin.svg
[node-url]: https://nodejs.org

[dependencies]: https://david-dm.org/Seldszar/archiver-webpack-plugin.svg
[dependencies-url]: https://david-dm.org/Seldszar/archiver-webpack-plugin

[test]: https://secure.travis-ci.org/Seldszar/archiver-webpack-plugin.svg
[test-url]: http://travis-ci.org/Seldszar/archiver-webpack-plugin

[semantic-release]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
