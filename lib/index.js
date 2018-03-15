const archiver = require("archiver");
const fs = require("fs");
const url = require("url");

class ArchiverWebpackPlugin {
  constructor(options = {}) {
    this.output = options.output;
    this.test = options.test;
    this.format = options.format || "zip";
    this.formatOptions = options.formatOptions || {};
  }

  apply(compiler) {
    const ext = this.formatOptions.gzip ? `${this.format}.gz` : this.format;
    const output = this.output || `${compiler.options.output.path}.${ext}`;

    compiler.plugin("emit", (compilation, callback) => {
      const { assets } = compilation;
      const archive = archiver(this.format, this.formatOptions);

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
