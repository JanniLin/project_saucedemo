const { Given, When, Then } = require("@wdio/cucumber-framework");
const { LoginPage, InventoryPage, pages } = require("../../po/pagesFactory");
const { invalidCredentials, validCredentials } = require("../data/credentials");

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I enter valid credentials$/, async () => {
  await LoginPage.usernameField.setValue(validCredentials.username);
  await LoginPage.passwordField.setValue(validCredentials.password);
});

When(/^I enter invalid credentials$/, async () => {
  await LoginPage.usernameField.setValue(invalidCredentials.username);
  await LoginPage.passwordField.setValue(invalidCredentials.password);
});

When(/^I clear the following fields: (.+)$/, async (fieldsToClear) => {
  const fields = fieldsToClear.split(", ").map((field) => field.trim());

  if (fields.includes("username")) {
    await LoginPage.clearField(LoginPage.usernameField);
  }

  if (fields.includes("password")) {
    await LoginPage.clearField(LoginPage.passwordField);
  }
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
