<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg">
  </a>
  <h1>Archiver Plugin</h1>
  <p>Generate a compressed archive of compiled assets.<p>
  <p>
    <a href="https://npmjs.com/package/archiver-webpack-plugin">
      <img alt="NPM" src="https://img.shields.io/npm/v/archiver-webpack-plugin.svg">
    </a>
    <a href="https://david-dm.org/seldszar/archiver-webpack-plugin">
      <img alt="Dependencies" src="https://david-dm.org/seldszar/archiver-webpack-plugin.svg">
    </a>
    <a href="https://travis-ci.org/seldszar/archiver-webpack-plugin">
      <img alt="Build Status" src="https://travis-ci.org/seldszar/archiver-webpack-plugin.svg?branch=master">
    </a>
  </p>
</div>

## Table of Contents

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
