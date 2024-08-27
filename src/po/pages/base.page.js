const { browser } = require("@wdio/globals");
const { Key } = require("webdriverio");

module.exports = class BasePage {
  constructor(path) {
    this.path = path;
  }
  async clearField(field) {
    await field.click();
    await browser.keys([Key.Ctrl, "a"]);
    await browser.keys([Key.Delete]);
  }

  async open() {
    await browser.url(this.path);
  }
};
