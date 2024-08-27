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
}

module.exports = new LoginPage();
