const { browser } = require("@wdio/globals");

module.exports = class BasePage {
  constructor(path) {
    this.path = path;
  }

  async open() {
    await browser.url(this.path);
  }
};
