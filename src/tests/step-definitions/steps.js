const { Given, When, Then } = require("@wdio/cucumber-framework");
const { LoginPage, InventoryPage, pages } = require("../../po/pagesFactory");

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I enter (.+) in the username field$/, async (username) => {
  await LoginPage.usernameField.setValue(username);
});

When(/^I enter (.+) in the password field$/, async (password) => {
  await LoginPage.passwordField.setValue(password);
});

When(/^I clear the username field$/, async () => {
  await LoginPage.clearField(LoginPage.usernameField);
});

When(/^I clear the password field$/, async () => {
  await LoginPage.clearField(LoginPage.passwordField);
});

When(/^I click the login button$/, async () => {
  await LoginPage.loginButton.click();
});

Then(/^I should see the error (.+)$/, async (error_message) => {
  const message = await LoginPage.errorMessage.getText();
  await expect(message).toContain(error_message);
});

Then(/^I should see the header (.+)$/, async (text) => {
  const headerElement = await InventoryPage.headerText;
  await expect(headerElement).toHaveText(text);
});
