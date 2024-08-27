import { Key } from "webdriverio";

const { $ } = require("@wdio/globals");
const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor() {
    super("");
  }

  get usernameField() {
    return $("input#user-name");
  }

  get passwordField() {
    return $("input#password");
  }

  get loginButton() {
    return $("input#login-button");
  }
  get errorMessage() {
    return $(".error-message-container");
  }

  async clearField(field) {
    await field.click();
    await browser.keys([Key.Ctrl, "a"]);
    await browser.keys([Key.Delete]);
  }
}

module.exports = new LoginPage();
