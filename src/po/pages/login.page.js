const { $ } = require("@wdio/globals");
const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor() {
    super("");
  }

  usernameField = $("input#user-name");

  passwordField = $("input#password");

  loginButton = $("input#login-button");

  errorMessage = $(".error-message-container");
}

module.exports = new LoginPage();
