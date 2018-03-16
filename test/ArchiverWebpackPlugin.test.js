const ArchiverWebpackPlugin = require("../lib");

describe("ArchiverWebpackPlugin", () => {
  it("has `apply` function", () => {
    expect(typeof new ArchiverWebpackPlugin().apply).toEqual("function");
  });
});
