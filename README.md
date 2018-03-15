[![npm][npm]][npm-url]
[![deps][deps]][deps-url]

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" vspace="" hspace="25"
      src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg">
  </a>
  <h1>Archiver Plugin</h1>
  <p>Generate a compressed archive of compiled assets.<p>
</div>

## Install

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


[npm]: https://img.shields.io/npm/v/archiver-webpack-plugin.svg
[npm-url]: https://npmjs.com/package/archiver-webpack-plugin

[deps]: https://david-dm.org/seldszar/archiver-webpack-plugin.svg
[deps-url]: https://david-dm.org/seldszar/archiver-webpack-plugin
