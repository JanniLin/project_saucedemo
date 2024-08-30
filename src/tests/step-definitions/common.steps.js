const { When, Given } = require("@wdio/cucumber-framework");
const { pages } = require("../../po/pagesFactory");

Given(/^I am on the (.+) page$/, async (page) => {
  page.includes("login")
    ? await pages.login.open()
    : await pages.inventory.open();
  // await pages[page].open();
});

When(
  /^I clear the following fields: (.+) on the (.+) page$/,
  async (fieldsToClear, page) => {
    const fields = fieldsToClear.split(",").map((field) => field.trim());

    for (const field of fields) {
      await pages[page].clearField(pages[page][`${field}Field`]);
    }
  },
);
