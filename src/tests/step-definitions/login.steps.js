const { When, Then } = require("@wdio/cucumber-framework");
const { LoginPage, pages } = require("../../po/pagesFactory");
const { invalidCredentials, validCredentials } = require("../data/credentials");

When(/^I enter (valid|invalid) credentials$/, async (credentialType) => {
  const credentials =
    credentialType === "valid" ? validCredentials : invalidCredentials;

  await LoginPage.usernameField.setValue(credentials.username);
  await LoginPage.passwordField.setValue(credentials.password);
});

When(/^I click the login button$/, async () => {
  await LoginPage.loginButton.click();
});

Then(
  /^I should see the error (.+) on the (.+) page$/,
  async (error_message, page) => {
    const message = await pages[page].errorMessage.getText();
    await expect(message).toContain(error_message);
  },
);
