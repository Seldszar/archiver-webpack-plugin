const archiver = require("archiver");
const fs = require("fs");
const url = require("url");

/**
 * Archiver plugin for Webpack.
 */
class ArchiverWebpackPlugin {
  /**
   * Create a new plugin.
   *
   * @param {Object} [options={}] The plugin options.
   * @param {String} [options.output] The archive output path.
   * @param {RegExp|Array<RegExp>} [options.test] All assets matching this RegExp are processed.
   * @param {String} [options.format="zip"] The archive format.
   * @param {Object} [options.formatOptions="{}"] The archive format options.
   * @param {Object} [options.archive] The Archiver instance.
   */
  constructor(options = {}) {
    this.output = options.output;
    this.test = options.test;
    this.format = options.format || "zip";
    this.formatOptions = options.formatOptions || {};
    this.archive = options.archive;
  }

  /**
   * Function called when the plugin is applied.
   *
   * @param {Object} compiler The compiler.
   */
  apply(compiler) {
    const ext = this.formatOptions.gzip ? `${this.format}.gz` : this.format;
    const output = this.output || `${compiler.options.output.path}.${ext}`;

    compiler.plugin("emit", (compilation, callback) => {
      const { assets } = compilation;
      const archive = this.archive || archiver(this.format, this.formatOptions);

      Object.keys(assets).forEach(file => {
        if (Array.isArray(this.test)) {
          if (this.test.every(t => !t.test(file))) {
            return;
          }
        } else if (this.test && !this.test.test(file)) {
          return;
        }

        const asset = assets[file];
        const content = asset.source();
        const parse = url.parse(file);

        archive.append(content, { name: parse.pathname });
      });

      archive.pipe(fs.createWriteStream(output));
      archive.finalize();

      callback();
    });
  }
}

module.exports = ArchiverWebpackPlugin;
