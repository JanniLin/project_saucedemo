const { Then } = require("@wdio/cucumber-framework");
const { pages } = require("../../po/pagesFactory");

Then(/^I should see the header (.+) on the (.+) page$/, async (text, page) => {
  const headerElement =
  page.includes('inventory')? await pages.inventory.headerText : null
  //const headerElement = await pages[page].headerText;
  await expect(headerElement).toHaveText(text);
});
