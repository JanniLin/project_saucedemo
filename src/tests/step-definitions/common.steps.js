const { When } = require("@wdio/cucumber-framework");
const { pages } = require("../../po/pagesFactory");

When(
  /^I clear the following fields: (.+) on the (.+) page$/,
  async (fieldsToClear, page) => {
    const fields = fieldsToClear.split(",").map((field) => field.trim());

    for (const field of fields) {
      await pages[page].clearField(pages[page][`${field}Field`]);
    }
  },
);
